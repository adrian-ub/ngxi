import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBigUpLineFilledIcon],svg[tabler-arrow-big-up-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v5a1 1 0 0 0 1 1h6l.117-.007A1 1 0 0 0 16 18l-.001-5h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0M15 20a1 1 0 0 1 .117 1.993L15 22H9a1 1 0 0 1-.117-1.993L9 20z"></svg:path>`,
})
export class TablerArrowBigUpLineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
