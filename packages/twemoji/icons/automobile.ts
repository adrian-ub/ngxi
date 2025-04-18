import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAutomobileIcon],svg[twemoji-automobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M13 32h20s3 0 3-4c0-2 0-6-1-7s-8-7-11-7h-6c-3 0-10 7-10 7l-4 1s-3 1-3 3v3s-1 .338-1 1.957C0 32 2 32 2 32z"></svg:path><svg:path fill="#BBDDF5" d="M20 16h-2c-2 0-8 6-8 6s4.997-.263 10-.519zm10 3c-1-1-5-3-7-3h-1v5.379c4.011-.204 7.582-.379 8-.379c1 0 1-1 0-2"></svg:path><svg:circle cx="10" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="10" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#CCD6DD"></svg:circle>`,
})
export class TwemojiAutomobileIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
