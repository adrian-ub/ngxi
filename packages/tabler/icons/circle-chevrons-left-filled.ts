import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronsLeftFilledIcon],svg[tabler-circle-chevrons-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.927 2.133c5.494-.04 9.992 4.359 10.073 9.852v.295c-.081 5.493-4.579 9.893-10.073 9.852c-5.494-.04-9.926-4.505-9.926-10c0-5.494 4.432-9.959 9.926-10m3.78 6.16a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L13.415 12l2.292-2.293a1 1 0 0 0 0-1.414m-4 0a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L9.415 12l2.292-2.293a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class TablerCircleChevronsLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
