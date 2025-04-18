import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCropSharpIcon],svg[material-symbols-crop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 23v-4H5V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h10v10z"></svg:path>`,
})
export class MaterialSymbolsCropSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
