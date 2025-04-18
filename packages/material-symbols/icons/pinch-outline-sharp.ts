import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPinchOutlineSharpIcon],svg[material-symbols-pinch-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6V3.55L3.55 9.5H6V11H1V6h1.5v2.45L8.45 2.5H6V1h5v5zm4.075 17L7.6 17l1.575-1.625l2.825.8V7h2v11.825l-2.425-.675l2.85 2.85H21v-7h2v9zM15 16v-5h2v5zm3 0v-4h2v4zm-.5 2"></svg:path>`,
})
export class MaterialSymbolsPinchOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
