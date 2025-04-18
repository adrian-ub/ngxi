import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChatAddOnOutlineSharpIcon],svg[material-symbols-chat-add-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V3h16v7.075q-.25-.05-.5-.062T18 10t-.5.013t-.5.062V5H5v10h7.075q-.05.25-.062.5T12 16t.013.5t.062.5H6zM7 9h8V7H7zm0 4h5v-2H7zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 15V5z"></svg:path>`,
})
export class MaterialSymbolsChatAddOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
