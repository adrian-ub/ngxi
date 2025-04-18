import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShoppingCartOffSharpIcon],svg[material-symbols-light-shopping-cart-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.921 12.116L7.306 4.5h12.971l-4.129 7.616zm-7.613 9q-.614 0-1.057-.434t-.443-1.066t.443-1.067q.443-.433 1.057-.433t1.056.433q.444.434.444 1.067q0 .632-.443 1.066t-1.057.434m13 .607l-5.62-5.607H4.925l2.629-4.82L5.484 6.9L2.24 3.654l.707-.708l18.07 18.07zm-3.616-.607q-.613 0-1.057-.434t-.443-1.066t.443-1.067q.444-.433 1.057-.433t1.057.433t.443 1.067t-.443 1.066t-1.057.434"></svg:path>`,
})
export class MaterialSymbolsLightShoppingCartOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
