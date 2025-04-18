import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVignetteSharpIcon],svg[material-symbols-vignette-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm10-4q2.45 0 4.225-1.187T18 12t-1.775-2.812T12 8T7.775 9.188T6 12t1.775 2.813T12 16"></svg:path>`,
})
export class MaterialSymbolsVignetteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
