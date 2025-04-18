import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqConeGeometricIcon],svg[marketeq-cone-geometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c8.054 0 14.583-2.798 14.583-6.25S33.054 31.25 25 31.25s-14.583 2.798-14.583 6.25S16.946 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M39.292 36.27L25 6.25L10.708 36.27a2.9 2.9 0 0 0-.291 1.23c0 3.458 6.52 6.25 14.583 6.25s14.583-2.792 14.583-6.25a2.9 2.9 0 0 0-.291-1.23"></svg:path></svg:g>`,
})
export class MarketeqConeGeometricIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
