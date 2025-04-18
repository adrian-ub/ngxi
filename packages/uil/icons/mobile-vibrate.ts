import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMobileVibrateIcon],svg[uil-mobile-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.88 14.12L9.73 14l-.18-.1l-.18-.05a1 1 0 0 0-.9.27a.8.8 0 0 0-.22.33a.94.94 0 0 0 0 .76a1.07 1.07 0 0 0 .54.54a1 1 0 0 0 .38.08a1.1 1.1 0 0 0 .39-.08a.9.9 0 0 0 .32-.22a1 1 0 0 0 .22-.32a1 1 0 0 0 .07-.38a.84.84 0 0 0-.08-.38a.9.9 0 0 0-.21-.33M3.51 8.76a1 1 0 0 0 .71-.3l4.24-4.24a1 1 0 0 0 0-1.41a1 1 0 0 0-1.41 0L2.81 7.05a1 1 0 0 0 0 1.41a1 1 0 0 0 .7.3m17.68 6.78a1 1 0 0 0-1.41 0l-4.24 4.24a1 1 0 0 0 .7 1.71a1 1 0 0 0 .71-.3L21.19 17a1 1 0 0 0 0-1.46m.17-5.66a3 3 0 0 0-.87-2.12l-4.25-4.25a3.08 3.08 0 0 0-4.24 0L3.51 12a3 3 0 0 0 0 4.24l4.25 4.25a3 3 0 0 0 4.24 0L20.49 12a3 3 0 0 0 .87-2.12m-2.29.71l-8.48 8.48a1 1 0 0 1-1.42 0l-4.24-4.24a1 1 0 0 1 0-1.42l8.48-8.48a1 1 0 0 1 1.42 0l4.24 4.24a1 1 0 0 1 0 1.42"></svg:path>`,
})
export class UilMobileVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
