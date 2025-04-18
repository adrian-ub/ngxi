import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVignetteSharpIcon],svg[material-symbols-light-vignette-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm9-3.5q2.258 0 3.879-1.039T17.5 12t-1.621-2.461T12 8.5T8.121 9.539T6.5 12t1.621 2.461T12 15.5"></svg:path>`,
})
export class MaterialSymbolsLightVignetteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
