import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBackwardIcon],svg[tdesign-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4.336v7l7-7v15.328l-7-7v7L3.586 12zM6.414 12l2.836 2.836V9.164zm7 0l2.836 2.836V9.164z"></svg:path>`,
})
export class TdesignBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
