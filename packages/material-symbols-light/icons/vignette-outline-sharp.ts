import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVignetteOutlineSharpIcon],svg[material-symbols-light-vignette-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5q2.258 0 3.879-1.039T17.5 12t-1.621-2.461T12 8.5T8.121 9.539T6.5 12t1.621 2.461T12 15.5m0-1q-1.817 0-3.159-.744T7.5 12t1.341-1.756Q10.183 9.5 12 9.5t3.159.744Q16.5 10.99 16.5 12t-1.341 1.756Q13.817 14.5 12 14.5M3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightVignetteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
