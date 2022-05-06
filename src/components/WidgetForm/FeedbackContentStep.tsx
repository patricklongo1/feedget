import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { CloseButton } from '../CloseButton';
import { makeStyles } from '@material-ui/core/styles';
import { feedbackTypes, FeedbackType } from '.';
import { FaArrowLeft } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {},
  headerBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  form: {
    width: '100%',
  },
  container: {
    margin: '1rem 0',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  textArea: {
    padding: '10px',
    minWidth: '304px',
    width: '96%',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: theme.palette.text.primary,
    borderColor: theme.palette.primary.main,
    resize: 'none',
    borderRadius: '8px',
    '&::placeholder': {
      color: theme.palette.text.primary,
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.palette.primary.dark,
    },
    '&::-webkit-scrollbar': {
      width: 7,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 6px rgba(15, 13, 133, 0.842)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.dark,
      outline: `1px solid slategrey`,
    },
  },
  footer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    width: '100%',
  },
  sendButton: {
    padding: '0.5rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '8px',
    border: '1px solid transparent',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

interface FeedbackContentStepProps {
  handleClosePopover: () => void;
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
}

export function FeedbackContentStep({
  handleClosePopover,
  feedbackType,
  handleRestartFeedback,
}: FeedbackContentStepProps) {
  const classes = useStyles();
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <IconButton className={classes.backButton} onClick={() => handleRestartFeedback()}>
        <FaArrowLeft size={15} />
      </IconButton>

      <Box className={classes.headerBox}>
        {feedbackTypeInfo.iconContentStep}
        <Typography className={classes.headerText}>{feedbackTypeInfo.title}</Typography>
        <CloseButton handleClosePopover={handleClosePopover} />
      </Box>

      <form action="" className={classes.form}>
        <Box className={classes.container}>
          <TextareaAutosize
            minRows={4}
            maxRows={4}
            aria-label="maximum height"
            className={classes.textArea}
            placeholder="Conte com detalhes o que está acontecendo..."
          />
        </Box>
      </form>

      <Box className={classes.footer}>
        <Button type="submit" className={classes.sendButton}>
          Enviar feedback
        </Button>
      </Box>
    </>
  );
}
