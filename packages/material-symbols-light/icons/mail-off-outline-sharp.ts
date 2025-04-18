import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMailOffOutlineSharpIcon],svg[material-symbols-light-mail-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.429 21.856L17.573 19H3V5h2l1 1H4v12h12.573L2.606 4.033l.713-.714l17.823 17.823zM21 18.188l-1-1V6.886l-6.221 4.082l-.687-.686L19.692 6H8.812l-1-1H21z"></svg:path>`,
})
export class MaterialSymbolsLightMailOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
