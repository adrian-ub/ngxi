import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagThailandIcon],svg[twemoji-flag-thailand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A7122D" d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482z"></svg:path><svg:path fill="#EEE" d="M0 22.181h36v4.485H0z"></svg:path><svg:path fill="#292648" d="M0 13.513h36v8.821H0z"></svg:path><svg:path fill="#EEE" d="M0 9.181h36v4.485H0z"></svg:path><svg:path fill="#A7122D" d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333z"></svg:path>`,
})
export class TwemojiFlagThailandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
