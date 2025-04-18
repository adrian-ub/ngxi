import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkunreadMailboxOutlineSharpIcon],svg[material-symbols-light-markunread-mailbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 14v-4H4v10h16V10H10V9h11v12H3V9h3.616V3h6.5v3.616h-5.5V14zM4 10v4zv10z"></svg:path>`,
})
export class MaterialSymbolsLightMarkunreadMailboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
