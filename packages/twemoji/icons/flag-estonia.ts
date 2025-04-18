import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagEstoniaIcon],svg[twemoji-flag-estonia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M0 14h36v9H0z"></svg:path><svg:path fill="#4891D9" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEE" d="M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4"></svg:path>`,
})
export class TwemojiFlagEstoniaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
