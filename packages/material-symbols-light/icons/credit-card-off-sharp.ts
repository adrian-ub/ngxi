import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditCardOffSharpIcon],svg[material-symbols-light-credit-card-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.189l-6.996-6.997H20V8.808h-8.38L7.811 5H21zM4 11.192h5.766L7.38 8.808H4zm17.104 11.339L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223z"></svg:path>`,
})
export class MaterialSymbolsLightCreditCardOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
