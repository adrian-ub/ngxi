import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryIcon],svg[icon-park-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V13.6095C40 13.07 39.782 12.5533 39.3954 12.1768L31.5824 4.56725C31.209 4.20354 30.7083 4 30.187 4H10C8.89543 4 8 4.89543 8 6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 21L8 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 29H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 36H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 44L30 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 44L18 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 33L8 33"></svg:path></svg:g>`,
})
export class IconParkMemoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
