import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEngineeringVehicleIcon],svg[icon-park-twotone-engineering-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEngineeringVehicle0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 6h6M10 36H6v-8h26v8H18m14 0V12h6.5L44 24v12h-3"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M4 8h22v14H7z"></svg:path><svg:circle cx="37" cy="38" r="4" fill="#555"></svg:circle><svg:circle cx="14" cy="38" r="4" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEngineeringVehicle0)"></svg:path>`,
})
export class IconParkTwotoneEngineeringVehicleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
