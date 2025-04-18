import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEngineeringVehicleIcon],svg[icon-park-engineering-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 6H38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 36H6V28H32V36H18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 36V12H38.5L44 24V36H41"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 8L26 8L26 22L7 22L4 8Z"></svg:path><svg:circle cx="37" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="14" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkEngineeringVehicleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
