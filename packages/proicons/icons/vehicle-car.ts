import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsVehicleCarIcon],svg[proicons-vehicle-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 11.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v6H3.75z"></svg:path><svg:circle cx="7" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="13" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 14.75h4M6.271 5.567a2 2 0 0 1 1.88-1.317h7.698a2 2 0 0 1 1.88 1.317L19.25 9.75H4.75zM3.75 17.75h3.438v1.7a1.3 1.3 0 0 1-1.3 1.3H5.05a1.3 1.3 0 0 1-1.3-1.3zm13.063 0h3.437v1.7a1.3 1.3 0 0 1-1.3 1.3h-.837a1.3 1.3 0 0 1-1.3-1.3z"></svg:path></svg:g>`,
})
export class ProiconsVehicleCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
