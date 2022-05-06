import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CloseButton } from '../CloseButton';
import { makeStyles } from '@material-ui/core/styles';
import { FeedbackType, feedbackTypes } from '.';

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void;
  handleClosePopover: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  headerText: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  footerText: {
    fontSize: '12px',
    color: theme.palette.primary.main,
  },
  optionBox: {
    display: 'flex',
    padding: '8px 0',
    gap: '0.5rem',
    width: '100%',
    margin: '8px 0',
  },
  optionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  optionButton: {
    backgroundColor: theme.palette.primary.light,
    border: '1px solid transparent',
    borderRadius: '16px',
    padding: '2rem 0',
    width: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  typo: {
    justifySelf: 'center',
    flex: 1,
    marginTop: '-30px',
    zIndex: 2,
  },
}));

export function FeedbackTypeStep({
  setFeedbackType,
  handleClosePopover,
}: FeedbackTypeStepProps) {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Typography className={classes.headerText}>Deixe seu feedback</Typography>
        <CloseButton handleClosePopover={handleClosePopover} />
      </Box>

      <Box className={classes.optionBox}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Box className={classes.optionItem} key={key}>
            <Button
              variant="contained"
              className={classes.optionButton}
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              {value.iconTypeStep}
            </Button>
            <Typography className={classes.typo}>{value.title}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
