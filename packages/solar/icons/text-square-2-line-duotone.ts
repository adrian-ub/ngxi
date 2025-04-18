import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextSquare2LineDuotoneIcon],svg[solar-text-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 9.3c-.058-2.512-.298-3.98-1.303-4.982C18.377 3 16.251 3 12 3S5.623 3 4.303 4.318C3.298 5.321 3.058 6.788 3 9.3m18 5.4c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21s-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7" opacity=".5"></svg:path><svg:path d="M8 8h8m-4 8V8m10 4h-2M4 12H2"></svg:path></svg:g>`,
})
export class SolarTextSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
