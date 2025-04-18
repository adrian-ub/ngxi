import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartphoneCameraIcon],svg[material-symbols-light-smartphone-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.616 22q-.667 0-1.141-.475T6 20.386V3.615q0-.666.475-1.14T7.615 2h8.77q.666 0 1.14.475T18 3.614V5.5H7v13h11v1.885q0 .666-.475 1.14t-1.14.475zm6.984-6.577q-.533 0-.912-.376t-.38-.913v-3.4q0-.532.375-.912q.376-.38.913-.38h.856l.856-.865h1.7l.85.865h.851q.531 0 .911.376t.38.913v3.401q0 .532-.376.911t-.912.38zm2.554-1.5q.61 0 1.055-.445t.445-1.058t-.445-1.045t-1.055-.433t-1.055.433t-.445 1.045q0 .613.445 1.058t1.055.445"></svg:path>`,
})
export class MaterialSymbolsLightSmartphoneCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
