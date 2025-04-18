import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkunreadMailboxSharpIcon],svg[material-symbols-light-markunread-mailbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V9h3.616V3h6.5v3.616h-5.5V14H10V9h11v12z"></svg:path>`,
})
export class MaterialSymbolsLightMarkunreadMailboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
