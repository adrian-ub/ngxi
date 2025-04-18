import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEngineeringVehicleIcon],svg[icon-park-outline-engineering-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 6h6M10 36H6v-8h26v8H18m14 0V12h6.5L44 24v12h-3"></svg:path><svg:path stroke-linejoin="round" d="M4 8h22v14H7z"></svg:path><svg:circle cx="37" cy="38" r="4"></svg:circle><svg:circle cx="14" cy="38" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineEngineeringVehicleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
