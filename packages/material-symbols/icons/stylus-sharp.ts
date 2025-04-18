import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusSharpIcon],svg[material-symbols-stylus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 20.1L2.7 21.3l1.2-5.75zm1.625-1.225l-4.95-4.95l11.75-11.75l4.95 4.95z"></svg:path>`,
})
export class MaterialSymbolsStylusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
