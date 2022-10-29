import { GridRowId } from '@mui/x-data-grid'
import { update } from 'ramda'
import { Row } from '../Table.types'
import findRowIndexById from './findRowIndexById'

/**
 * Updates value of `row.subject`
 *
 * @param id
 * @param rows
 * @param subject
 * @returns updated `rows` array
 */
const updateSubject = (id: GridRowId, rows: Row[], subject: any) => {
  const index = findRowIndexById(id, rows)
  return update(index, { ...rows[index], subject }, rows)
}

export default updateSubject
