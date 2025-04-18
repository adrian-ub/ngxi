import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagLaosIcon],svg[twemoji-flag-laos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CE1126" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-3H0zM32 5H4a4 4 0 0 0-4 4v3h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#002868" d="M0 24h36V12H0zm18-11a5 5 0 1 1-.001 10.001A5 5 0 0 1 18 13"></svg:path><svg:circle cx="18" cy="18" r="5" fill="#FFF"></svg:circle>`,
})
export class TwemojiFlagLaosIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
