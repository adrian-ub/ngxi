import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditRoadOutlineSharpIcon],svg[material-symbols-edit-road-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.125V4h2v6.125zM4 20V4h2v16zm6-12V4h2v4zm0 6v-4h2v4zm0 6v-4h2v4zm4 0v-3.075l6.575-6.55l3.075 3.05L17.075 20zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditRoadOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
