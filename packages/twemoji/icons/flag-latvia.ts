import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagLatviaIcon],svg[twemoji-flag-latvia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9E3039" d="M32 5H4a4 4 0 0 0-4 4v6h36V9a4 4 0 0 0-4-4m0 26H4a4 4 0 0 1-4-4v-6h36v6a4 4 0 0 1-4 4"></svg:path><svg:path fill="#EEE" d="M0 15h36v6H0z"></svg:path>`,
})
export class TwemojiFlagLatviaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
