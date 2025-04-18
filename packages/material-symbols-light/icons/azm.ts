import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAzmIcon],svg[material-symbols-light-azm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.904 15.5l2.904-2.904V5h-7.596L8.308 7.904h7.596zM11 20.404l2.904-2.904V9.904H6.308l-2.904 2.904H11z"></svg:path>`,
})
export class MaterialSymbolsLightAzmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
