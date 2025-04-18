import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAbdominalIcon],svg[icon-park-outline-abdominal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M7.9 5q4.256 4.529 4.256 11.765C12.156 24 6 29.538 4.969 33.5q-1.03 3.962-.97 9.5M39.256 5q-4.257 4.529-4.257 11.765C35 24 41.156 29.538 42.186 33.5q1.03 3.962.97 9.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M6.244 30.837q9.787 6.195 17.777 6.195t16.898-6.195"></svg:path><svg:path fill="currentColor" d="M24 31a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class IconParkOutlineAbdominalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
