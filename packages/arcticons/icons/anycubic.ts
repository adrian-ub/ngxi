import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnycubicIcon],svg[arcticons-anycubic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.724 23.136l-10.213-1.1M15.96 6.062l16.55 16.079l-15.712 19.902M15.594 5.695L4.962 24.498L16.59 42.304l14.14-5.184l12.308-13.93l-13.46-12.152z"></svg:path>`,
})
export class ArcticonsAnycubicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
