import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MdReportProblem } from 'react-icons/md';
import { FcIdea } from 'react-icons/fc';
import { BsFillGearFill } from 'react-icons/bs';
import { FeedbackTypeStep } from './FeedbackTypeStep';
import { FeedbackContentStep } from './FeedbackContentStep';
import { FeedbackSuccessStep } from './FeedbackSuccessStep';

const useStyles = makeStyles((theme) => ({
  root: {},
  headerText: {
    fontSize: '20px',
    lineHeight: '1.25rem',
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

interface WidgetFormProps {
  popupStateClose: Function;
}

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    iconTypeStep: (
      <MdReportProblem style={{ color: '#9e1a1a', marginBottom: 15 }} size={40} />
    ),
    iconContentStep: (
      <MdReportProblem style={{ color: '#9e1a1a', marginRight: '0.25rem' }} size={25} />
    ),
  },
  IDEA: {
    title: 'Sugestão',
    iconTypeStep: <FcIdea size={40} style={{ marginBottom: 15 }} />,
    iconContentStep: <FcIdea size={25} style={{ marginRight: '0.25rem' }} />,
  },
  OTHER: {
    title: 'Outro',
    iconTypeStep: (
      <BsFillGearFill style={{ color: '#378805', marginBottom: 15 }} size={40} />
    ),
    iconContentStep: (
      <BsFillGearFill style={{ color: '#378805', marginRight: '0.25rem' }} size={25} />
    ),
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm({ popupStateClose }: WidgetFormProps) {
  const classes = useStyles();
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleClosePopover() {
    popupStateClose();
  }

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <>
      {feedbackSent ? (
        <FeedbackSuccessStep handleClosePopover={handleClosePopover} handleRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
        <FeedbackTypeStep
          setFeedbackType={setFeedbackType}
          handleClosePopover={handleClosePopover}
        />
      ) : (
        <FeedbackContentStep
          handleClosePopover={handleClosePopover}
          feedbackType={feedbackType}
          handleRestartFeedback={handleRestartFeedback}
          onFeedbackSent={() => setFeedbackSent(true)}
        />
      )}
        </>
      )}

      <Box>
        <Typography className={classes.footerText}>Enterprise - Brasil</Typography>
      </Box>
    </>
  );
}
