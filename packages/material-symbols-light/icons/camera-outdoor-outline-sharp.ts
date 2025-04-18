import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraOutdoorOutlineSharpIcon],svg[material-symbols-light-camera-outdoor-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.923 17.616v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077zM5 20V9.5l7-5.27l7 5.27V11h-1v-1l-6-4.5L6 10v9h13v1zm7-7.75"></svg:path>`,
})
export class MaterialSymbolsLightCameraOutdoorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
