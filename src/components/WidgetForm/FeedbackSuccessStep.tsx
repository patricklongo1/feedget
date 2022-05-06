import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CloseButton } from '../CloseButton';
import { makeStyles } from '@material-ui/core/styles';
import { FaCheckSquare } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem',
    width: '304px'
  },
  typo: {
    fontSize: '20px',
    marginTop: '0.5rem'
  },
  oneMoreButton: {
    padding: '0.50rem 0.75rem',
    marginTop: '0.75rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '8px',
    border: '1px solid transparent',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  }
}));

interface FeedbackSuccessStepProps {
  handleClosePopover: () => void;
  handleRestartFeedback: () => void;
}

export function FeedbackSuccessStep({handleClosePopover, handleRestartFeedback}: FeedbackSuccessStepProps) {
  const classes = useStyles()

  return (
    <>
      <Box>
        <CloseButton handleClosePopover={handleClosePopover} />
      </Box>

      <Box className={classes.content}>
        <FaCheckSquare size={40} />
        <Typography>Agradecemos o feedback</Typography>

        <Button
          className={classes.oneMoreButton}
          onClick={handleRestartFeedback}
        >
          Quero enviar outro
        </Button>
      </Box>
    </>
  )
};
