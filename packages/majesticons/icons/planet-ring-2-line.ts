import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPlanetRing2LineIcon],svg[majesticons-planet-ring-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:path d="M18 7.96c2.59-.125 4.379.274 4.625 1.193c.429 1.6-3.98 4.172-9.849 5.745c-5.868 1.572-10.972 1.55-11.401-.051c-.254-.948 1.188-2.236 3.625-3.455"></svg:path></svg:g>`,
})
export class MajesticonsPlanetRing2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
