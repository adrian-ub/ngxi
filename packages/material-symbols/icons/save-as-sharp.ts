import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSaveAsSharpIcon],svg[material-symbols-save-as-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23v-3.075l6.575-6.55l3.075 3.05L16.075 23zM6 10h9V6H6zm13.575 7.4l.925-.975l-.925-.925l-.95.95zM11 21H3V3h14l4 4v2.15l-6 5.975V15q0-1.25-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18h.1L11 19.1z"></svg:path>`,
})
export class MaterialSymbolsSaveAsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
