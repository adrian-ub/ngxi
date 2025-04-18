import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCreditCardHeartOutlineSharpIcon],svg[material-symbols-credit-card-heart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-8v.325V6zm13.9 2.5L14.4 17q-.325-.325-.462-.7t-.138-.75q0-.8.575-1.425t1.475-.625q.7 0 1.1.325t.95.875q.5-.5.913-.85t1.137-.35q.925 0 1.488.638T22 15.574q0 .375-.15.75T21.4 17zM4 8h16V6H4zm7.575 12H2V4h20v7.325q-.875-.625-1.912-.975T17.9 10q-1.425 0-2.687.538T13 12H4v6h6.975q.075.525.225 1.025t.375.975"></svg:path>`,
})
export class MaterialSymbolsCreditCardHeartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
