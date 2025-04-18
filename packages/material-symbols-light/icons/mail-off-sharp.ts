import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMailOffSharpIcon],svg[material-symbols-light-mail-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.429 21.856L17.573 19H3V5h2l1 1H4.573L2.606 4.033l.713-.714l17.823 17.823zM21 18.188l-7.221-7.22L20 6.884L19.692 6l-6.58 4.3l-5.3-5.3H21z"></svg:path>`,
})
export class MaterialSymbolsLightMailOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
