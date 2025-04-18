import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagBotswanaIcon],svg[twemoji-flag-botswana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 13h36v10H0z"></svg:path><svg:path fill="#75AADB" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z"></svg:path><svg:path fill="#141414" d="M0 16h36v4H0z"></svg:path>`,
})
export class TwemojiFlagBotswanaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
