import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { IconButton, Stack } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'
import findRowIndexById from '../functions/findRowIndexById'
import updateRowField from '../functions/updateRowField'
import { Row } from '../types/Table.types'

const renderNotificationCell =
  (
    rows: Row[],
    setRows: Dispatch<SetStateAction<Row[]>>
  ): GridColDef['renderCell'] =>
  ({ id, field }) => {
    const { notification } = rows[findRowIndexById(id, rows)]

    return (
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        width='100%'
      >
        <IconButton
          size='small'
          onClick={() =>
            setRows(updateRowField(id, rows, field, !notification))
          }
        >
          {notification ? (
            <NotificationsIcon fontSize='small' />
          ) : (
            <NotificationsNoneIcon fontSize='small' />
          )}
        </IconButton>
      </Stack>
    )
  }

export default renderNotificationCell