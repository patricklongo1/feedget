import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { makeStyles } from '@material-ui/core/styles';
import { WidgetForm } from './WidgetForm';

const useStyles = makeStyles((theme) => ({
  popover: {
    '& .MuiPopover-paper': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      borderRadius: '16px',
      marginBottom: '1rem',
      color: theme.palette.primary.main,
      maxWidth: '330px',
      ['@media (max-width:768px)']: {
        maxWidth: 'none',
        width: 'calc(100vw - 3.5rem)',
      },
      padding: '1rem',
      position: 'relative',
      margin: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  root: {
    position: 'absolute',
    bottom: '2.5rem',
    right: '3.7rem',
    alignItems: 'flex-end',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    height: '3.5rem',
    minWidth: '1.5rem',
    '&:hover': {
      '& $typograph': {
        maxWidth: '360px',
        overflow: 'visible',
      },
    },
  },
  typograph: {
    marginLeft: 5,
    fontWeight: 'bold',
    maxWidth: 0,
    overflow: 'hidden',
    transition: '0.8s',
  },
}));

export const Widget: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PopupState variant="popover" popupId="widget-popup-popover">
        {(popupState) => (
          <Box>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              {...bindTrigger(popupState)}
            >
              <BsFillChatLeftDotsFill size={18} style={{ marginLeft: 5 }} />
              <Typography className={classes.typograph}>FeedBack</Typography>
            </Button>

            <Popover
              className={classes.popover}
              {...bindPopover(popupState)}
              /* anchorReference="anchorPosition"
              anchorPosition={{ left: 96, top: 200 }} */
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <WidgetForm popupStateClose={popupState.close} />
            </Popover>
          </Box>
        )}
      </PopupState>
    </Box>
  );
};
