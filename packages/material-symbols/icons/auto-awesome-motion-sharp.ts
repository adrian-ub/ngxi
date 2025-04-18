import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMotionSharpIcon],svg[material-symbols-auto-awesome-motion-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22V10h12v12zm-4-4V6h12v2H8v10zm-4-4V2h12v2H4v10z"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMotionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
