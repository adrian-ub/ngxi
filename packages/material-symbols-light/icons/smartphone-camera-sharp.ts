import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartphoneCameraSharpIcon],svg[material-symbols-light-smartphone-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V2h12v3.5H7v13h11V22zm7.308-6.577v-5.98h2.134l.866-.866H18l.857.865H21v5.981zm3.846-1.5q.61 0 1.055-.445t.445-1.058t-.445-1.045t-1.055-.433t-1.055.433t-.445 1.045q0 .613.445 1.058t1.055.445"></svg:path>`,
})
export class MaterialSymbolsLightSmartphoneCameraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
