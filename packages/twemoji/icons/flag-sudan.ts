import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSudanIcon],svg[twemoji-flag-sudan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D21034" d="M32 5H4a4 4 0 0 0-4 4v4.5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#141414" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4.5H0z"></svg:path><svg:path fill="#EEE" d="M0 13.5h36v9H0z"></svg:path><svg:path fill="#007229" d="M1.351 6.004A4 4 0 0 0 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18z"></svg:path>`,
})
export class TwemojiFlagSudanIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
