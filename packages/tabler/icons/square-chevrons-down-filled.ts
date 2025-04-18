import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareChevronsDownFilledIcon],svg[tabler-square-chevrons-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM9.613 12.21a1 1 0 0 0-1.32 1.497l3 3l.094.083a1 1 0 0 0 1.32-.083l3-3l.083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L12 14.585l-2.293-2.292zm0-5a1 1 0 0 0-1.32 1.497l3 3l.094.083a1 1 0 0 0 1.32-.083l3-3l.083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L12 9.585L9.707 7.293z"></svg:path>`,
})
export class TablerSquareChevronsDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
