import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagGambiaIcon],svg[twemoji-flag-gambia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CC162B" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#3C762C" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0z"></svg:path><svg:path fill="#EEE" d="M0 21h36v2H0zm0-8h36v2H0z"></svg:path><svg:path fill="#0D218A" d="M0 15h36v6H0z"></svg:path>`,
})
export class TwemojiFlagGambiaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
