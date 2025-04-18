import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDualScreenOutlineSharpIcon],svg[material-symbols-light-dual-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.77 17.58l6 2.42V6.38L6.77 4zm-1 .697V3h1.038l6.961 2.717V21.49zm7-.277v-1h4.46V4H6.809V3H18.23v15zm-6-.42V4z"></svg:path>`,
})
export class MaterialSymbolsLightDualScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
