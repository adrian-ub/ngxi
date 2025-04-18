import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoTumblrIcon],svg[carbon-logo-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.6 28h-4c-3.59 0-6.3-1.86-6.3-6.3v-7.12H9v-3.86A7.17 7.17 0 0 0 14.3 4h3.76v6.12h4.36v4.46h-4.36v6.2c0 1.86.94 2.49 2.42 2.49h2.12Z"></svg:path>`,
})
export class CarbonLogoTumblrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
