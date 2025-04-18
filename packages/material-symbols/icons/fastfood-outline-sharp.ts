import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastfoodOutlineSharpIcon],svg[material-symbols-fastfood-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 13q-.8-1.125-2.112-1.562T8.5 11t-2.713.438T3.675 13zM1 15q0-2.725 2.275-4.362T8.5 9t5.225 1.638T16 15zm0 4v-2h15v2zm17 4v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.8 18zm0-2h1.4zM1 23v-2h15v2zm7.5-10"></svg:path>`,
})
export class MaterialSymbolsFastfoodOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
