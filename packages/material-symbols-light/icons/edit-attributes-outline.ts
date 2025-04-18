import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditAttributesOutlineIcon],svg[material-symbols-light-edit-attributes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16q-1.671 0-2.835-1.164Q3 13.67 3 12t1.165-2.835T7 8h10q1.671 0 2.836 1.165Q21 10.329 21 12t-1.164 2.836T17 16zm0-1h10q1.25 0 2.125-.875T20 12t-.875-2.125T17 9H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15m1.05-1.161l3.089-3.089l-.627-.627l-2.462 2.462l-.961-.962l-.628.627zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightEditAttributesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
