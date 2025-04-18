import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTumblrLineIcon],svg[ri-tumblr-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.001 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6h5.003v2h-5.003v2.91c.003 2.48.003 3.686.003 4.09c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.546V10H7.001V8z"></svg:path>`,
})
export class RiTumblrLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
