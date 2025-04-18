import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForwardToInboxSharpIcon],svg[material-symbols-forward-to-inbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4zM2 20V4h20v9.8q-.675-.4-1.437-.6T19 13q-2.5 0-4.25 1.75T13 19v1zm10-7l8-5V6l-8 5l-8-5v2z"></svg:path>`,
})
export class MaterialSymbolsForwardToInboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
