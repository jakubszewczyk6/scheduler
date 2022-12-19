import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import ViewListIcon from '@mui/icons-material/ViewList'
import {
  Box,
  Button,
  Drawer,
  DrawerProps,
  IconButton,
  ListItemButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { formatDistanceToNow } from 'date-fns'
import { any, map } from 'ramda'
import { MouseEventHandler } from 'react'
import { Schedule } from '../Schedule/types/Schedule.types'
import isUnsavedSchedule from './functions/isUnsavedSchedule'
import unsavedScheduleAsteriskSuffix from './functions/unsavedScheduleAsteriskSuffix'

interface SavesDrawerProps extends DrawerProps {
  schedule: Schedule
  schedules: Schedule[]
  onCreate: MouseEventHandler<HTMLButtonElement> | undefined
  onDelete: (name: string) => void
}

const SavesDrawer = ({
  schedule,
  schedules,
  onCreate,
  onDelete,
  ...props
}: SavesDrawerProps) => (
  <Drawer
    {...props}
    anchor='right'
    PaperProps={{
      sx: { width: 320 },
    }}
  >
    <Stack padding={2} justifyContent='space-between' height='100%'>
      <Stack spacing={2}>
        <Typography variant='h6' align='center'>
          Create or load schedules
        </Typography>
        <List
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 1,
          }}
        >
          {map(
            (schedule) => (
              <Stack key={schedule.name} direction='row' alignItems='start'>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <ViewListIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={unsavedScheduleAsteriskSuffix(schedule.name)}
                    secondary={formatDistanceToNow(
                      new Date(schedule.createdAt),
                      {
                        addSuffix: true,
                      }
                    )}
                  />
                </ListItemButton>
                <Tooltip
                  placement='left'
                  title={
                    schedules.length === 1 &&
                    'At least one schedule is required'
                  }
                >
                  <Box>
                    <IconButton
                      size='small'
                      disabled={schedules.length === 1}
                      onClick={() => onDelete(schedule.name)}
                    >
                      <CloseIcon fontSize='small' />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Stack>
            ),
            schedules
          )}
        </List>
      </Stack>
      <Tooltip
        title={
          isUnsavedSchedule(schedule) &&
          'All schedules must be saved before creating a new one'
        }
      >
        <Box>
          <Button
            variant='outlined'
            endIcon={<AddIcon />}
            disabled={any(isUnsavedSchedule, schedules)}
            onClick={onCreate}
            fullWidth
          >
            New schedule
          </Button>
        </Box>
      </Tooltip>
    </Stack>
  </Drawer>
)

export default SavesDrawer
