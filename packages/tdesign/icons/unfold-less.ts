import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUnfoldLessIcon],svg[tdesign-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 3.586l4 4l4-4L17.414 5L12 10.414L6.586 5zm4 10L17.414 19L16 20.414l-4-4l-4 4L6.586 19z"></svg:path>`,
})
export class TdesignUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
