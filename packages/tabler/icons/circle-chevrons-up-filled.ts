import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronsUpFilledIcon],svg[tabler-circle-chevrons-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.867 2.001c5.495 0 9.96 4.432 10 9.926S17.508 21.92 12.015 22h-.295c-5.493-.081-9.893-4.579-9.852-10.073c.04-5.494 4.505-9.926 10-9.926m.84 9.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 13.415l2.293 2.292a1 1 0 0 0 1.414-1.414zm0-4a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 9.415l2.293 2.292a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class TablerCircleChevronsUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
