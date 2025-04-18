import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPerformanceIcon],svg[icon-park-solid-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20a19.94 19.94 0 0 0-2.358-9.43"></svg:path><svg:path fill="currentColor" d="M35 10c2.21 0 4-1.343 4-3s-1.79-3-4-3s-4 1.343-4 3s1.79 3 4 3ZM24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="M31 6.5V24"></svg:path></svg:g>`,
})
export class IconParkSolidPerformanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
