import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSpeedIcon],svg[icon-park-outline-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34.023 6.69A19.9 19.9 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20c0-3.627-.966-7.03-2.654-9.962"></svg:path><svg:path d="M31.95 16.05S28.562 25.095 27 26.657A4 4 0 0 1 21.343 21c1.562-1.562 10.607-4.95 10.607-4.95Z"></svg:path></svg:g>`,
})
export class IconParkOutlineSpeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
