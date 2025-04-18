import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLicenseIcon],svg[material-symbols-light-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q-.846 0-1.423-.577T10 10t.577-1.423T12 8t1.423.577T14 10t-.577 1.423T12 12m-5 9.462v-6.59q-.95-.935-1.475-2.193T5 10q0-2.931 2.034-4.966Q9.067 3 11.997 3t4.967 2.034T19 10q0 1.421-.525 2.679T17 14.87v6.59l-5-1.5zM12 16q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"></svg:path>`,
})
export class MaterialSymbolsLightLicenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
