import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkunreadMailboxOutlineSharpIcon],svg[material-symbols-markunread-mailbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v-4H4v10h16V10H10V8h12v14H2V8h4V2h8v4H8v8zm-2-4v4zv10z"></svg:path>`,
})
export class MaterialSymbolsMarkunreadMailboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
