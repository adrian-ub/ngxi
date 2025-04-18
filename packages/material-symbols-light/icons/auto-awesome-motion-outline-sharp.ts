import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoAwesomeMotionOutlineSharpIcon],svg[material-symbols-light-auto-awesome-motion-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V11h10v10zm1-1h8v-8h-8zm-5-2.77V7h10.23v1H8v9.23zm-4-4V3h10.23v1H4v9.23zM12 20v-8z"></svg:path>`,
})
export class MaterialSymbolsLightAutoAwesomeMotionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
