import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMotionOutlineSharpIcon],svg[material-symbols-auto-awesome-motion-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22V10h12v12zm2-2h8v-8h-8zm-6-2V6h12v2H8v10zm-4-4V2h12v2H4v10zm10 6v-8z"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMotionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
