import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRealEstateAgentOutlineSharpIcon],svg[material-symbols-light-real-estate-agent-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.02 21.923l-7.616-2.22V21h-4v-8.154h6.373l7.358 2.693v1.615H21v2.615zM3.403 20h2v-6.154h-2zm10.565.862l6.008-1.831v-.877h-6.921L9.95 17.142l.33-.957l2.926.969h1.929v-.92l-6.516-2.388H6.404v4.808zM19 14.769v-7l-5.5-3.846L8 7.769v2.692H7V7.29l6.5-4.635L20 7.289v7.48zm-4.904-6.327h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm2 2h.808v-.808h-.808zm-2 0h.808v-.808h-.808z"></svg:path>`,
})
export class MaterialSymbolsLightRealEstateAgentOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
