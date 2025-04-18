import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMissedOutgoingIcon],svg[material-symbols-light-call-missed-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.904 16.714L3.98 8.79l.708-.714l7.215 7.215l6.388-6.388H13v-1h7v7h-1V9.617z"></svg:path>`,
})
export class MaterialSymbolsLightCallMissedOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
