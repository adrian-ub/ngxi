import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsHeartIcon],svg[humbleicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.574-1.635-4.46-2.135-6.035-.5c-1.573 1.635-1.34 3.836 0 5.752S9.41 16.89 12 19c2.59-2.11 4.694-3.832 6.035-5.748c1.34-1.916 1.573-4.117 0-5.752C16.46 5.865 13.574 6.365 12 8Z"></svg:path>`,
})
export class HumbleiconsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
