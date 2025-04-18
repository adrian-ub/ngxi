import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagLaosIcon],svg[twemoji-flag-for-flag-laos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CE1126" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-3H0v3zM32 5H4a4 4 0 0 0-4 4v3h36V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#002868" d="M0 24h36V12H0v12zm18-11a5 5 0 1 1-.001 10.001A5 5 0 0 1 18 13z"></svg:path><svg:circle fill="#FFF" cx="18" cy="18" r="5"></svg:circle>`,
})
export class TwemojiFlagForFlagLaosIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
