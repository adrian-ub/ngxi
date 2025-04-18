import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSbankenIcon],svg[arcticons-sbanken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.418 8.839a8.403 8.403 0 0 0-8.366 8.415h0a8.403 8.403 0 0 0 8.366 8.415h2.855m0 .001h2.854a8.403 8.403 0 0 1 8.366 8.415h0a8.403 8.403 0 0 1-8.39 8.415h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.72 11.681C27.401 9.736 24.895 8.84 19.273 8.84h-2.855M8.825 39.658c2.319 1.944 4.825 2.842 10.448 2.842h2.854"></svg:path><svg:circle cx="36.857" cy="8.591" r="3.091" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSbankenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
