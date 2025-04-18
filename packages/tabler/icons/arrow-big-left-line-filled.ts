import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBigLeftLineFilledIcon],svg[tabler-arrow-big-left-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.586 4L3 10.586a2 2 0 0 0 0 2.828L9.586 20a2 2 0 0 0 2.18.434l.145-.068A2 2 0 0 0 13 18.586V16h5a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 18 8l-5-.001V5.414A2 2 0 0 0 9.586 4"></svg:path><svg:path d="M4.415 12L11 5.414V9l.007.117A1 1 0 0 0 12 10l5-.001v4L12 14a1 1 0 0 0-1 1v3.586zM21 8a1 1 0 0 1 .993.883L22 9v6a1 1 0 0 1-1.993.117L20 15V9a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class TablerArrowBigLeftLineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
