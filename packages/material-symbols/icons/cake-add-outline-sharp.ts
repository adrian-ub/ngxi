import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCakeAddOutlineSharpIcon],svg[material-symbols-cake-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-8h2V8h6V6.55q-.45-.3-.725-.725T9 4.8q0-.375.15-.738T9.6 3.4L11 2l1.4 1.4q.3.3.45.662T13 4.8q0 .6-.275 1.025T12 6.55V8h6v6h2v8zm4-8h10v-4H6zm-2 6h14v-4H4zm2-6h10zm-2 6h14zm14-6H4zm1-6V6h-2V4h2V2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsCakeAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
