import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipCellphoneIcon],svg[mdi-tooltip-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v8H9zm13-2v12c0 1.11-.89 2-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2m-6 1.09C16 4.5 15.5 4 14.86 4H9.14C8.5 4 8 4.5 8 5.09v9.82C8 15.5 8.5 16 9.14 16h5.72c.64 0 1.14-.5 1.14-1.09z"></svg:path>`,
})
export class MdiTooltipCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
