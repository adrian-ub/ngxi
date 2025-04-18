import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNightPortraitIcon],svg[flat-color-icons-night-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40C4FF" d="M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7c-.7 0-1.3-.1-1.9-.3c1.2 2 3.4 3.3 5.9 3.3c3.9 0 7-3.1 7-7c0-3.2-2.1-5.9-5.1-6.7"></svg:path><svg:g fill="#B39DDB"><svg:circle cx="31" cy="19" r="2"></svg:circle><svg:circle cx="13" cy="19" r="2"></svg:circle><svg:path d="m22 37l-5-6v-6h10v6z"></svg:path></svg:g><svg:path fill="#D1C4E9" d="M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z"></svg:path><svg:g fill="#673AB7"><svg:circle cx="26" cy="19" r="1"></svg:circle><svg:circle cx="18" cy="19" r="1"></svg:circle><svg:path d="M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4l4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2zm5 27s-2 1-5 1s-5-1-5-1S6 33 6 44h32c0-11-11-13-11-13"></svg:path></svg:g>`,
})
export class FlatColorIconsNightPortraitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
