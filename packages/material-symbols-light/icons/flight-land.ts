import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlightLandIcon],svg[material-symbols-light-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h16v1zm14.223-4.82L4 11.045V5.02l1.458.425l1.122 3.32l4.084 1.187l-.817-8.19l1.856.542l2.988 8.821l4.262 1.244q.452.143.749.523q.297.381.297.864q0 .644-.52 1.143t-1.257.282"></svg:path>`,
})
export class MaterialSymbolsLightFlightLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
