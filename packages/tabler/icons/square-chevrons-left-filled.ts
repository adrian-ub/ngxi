import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareChevronsLeftFilledIcon],svg[tabler-square-chevrons-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-2.293 6.293a1 1 0 0 0-1.414 0l-3 3l-.083.094a1 1 0 0 0 .083 1.32l3 3l.094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L14.415 12l2.292-2.293l.083-.094a1 1 0 0 0-.083-1.32m-5 0a1 1 0 0 0-1.414 0l-3 3l-.083.094a1 1 0 0 0 .083 1.32l3 3l.094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L9.415 12l2.292-2.293l.083-.094a1 1 0 0 0-.083-1.32"></svg:path>`,
})
export class TablerSquareChevronsLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
