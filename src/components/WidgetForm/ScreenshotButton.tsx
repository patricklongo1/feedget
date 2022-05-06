import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FaCamera, FaTrash } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import html2canvas from 'html2canvas';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
  cameraButton: {
    width: 51,
    height: 45,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    border: '1px solid transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light} !important`,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  screenshotPreview: {
    padding: '0.25rem',
    width: 51,
    height: 45,
    borderRadius: '8px',
    border: `1px solid transparent`,
    position: 'relative',
    '&:hover': {
      '& $deleteIcon': {
        color: theme.palette.error.light,
      },
    },
  },
  deleteIcon: {
    color: theme.palette.error.main,
    position: 'absolute',
    right: 2,
    bottom: 2,
  }
}));

interface ScreenshotButtonProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, setScreenshot }: ScreenshotButtonProps) {
  const classes = useStyles();
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png')

    setScreenshot(base64image);
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <IconButton
        className={classes.screenshotPreview}
        onClick={() => setScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom', //demo porpose
          backgroundSize: 180 //demo porpose
        }}
      >
        <FaTrash size={15} className={classes.deleteIcon} />
      </IconButton>
    )
  }

  return (
    <IconButton className={classes.cameraButton} onClick={handleTakeScreenshot}>
        {isTakingScreenshot ? (<CircularProgress size={25} />) : (<FaCamera size={25} />)}
    </IconButton>
  );
}
