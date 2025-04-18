import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipImageOutlineIcon],svg[mdi-tooltip-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4zm3.5 2A1.5 1.5 0 0 1 9 7.5A1.5 1.5 0 0 1 7.5 9A1.5 1.5 0 0 1 6 7.5A1.5 1.5 0 0 1 7.5 6M6 14l5-5l2 2l5-5v8z"></svg:path>`,
})
export class MdiTooltipImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
