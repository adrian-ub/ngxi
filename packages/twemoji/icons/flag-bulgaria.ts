import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagBulgariaIcon],svg[twemoji-flag-bulgaria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#D62612" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z"></svg:path><svg:path fill="#00966E" d="M0 14h36v8H0z"></svg:path>`,
})
export class TwemojiFlagBulgariaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
