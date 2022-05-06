import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { FaWindowClose } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    top: 5,
    right: 5,
    position: 'absolute',
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.light,
    },
  },
  icon: {
    width: '1rem',
    height: '1rem',
  },
}));

interface CloseButtonProps {
  handleClosePopover: () => void;
}

export function CloseButton({ handleClosePopover }: CloseButtonProps) {
  const classes = useStyles();

  return (
    <Tooltip title="Fechar formulário de feedback" arrow placement="bottom">
      <IconButton onClick={() => handleClosePopover()} className={classes.root}>
        <FaWindowClose className={classes.icon} />
      </IconButton>
    </Tooltip>
  );
}
