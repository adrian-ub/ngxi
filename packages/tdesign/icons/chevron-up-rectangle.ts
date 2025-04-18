import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpRectangleIcon],svg[tdesign-chevron-up-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm8 4.086l5.414 5.414L16 14.914l-4-4l-4 4L6.586 13.5z"></svg:path>`,
})
export class TdesignChevronUpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
