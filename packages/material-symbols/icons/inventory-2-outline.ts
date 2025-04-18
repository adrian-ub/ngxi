import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInventory2OutlineIcon],svg[material-symbols-inventory-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V8.725q-.45-.275-.725-.712T2 7V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v3q0 .575-.275 1.013T21 8.724V20q0 .825-.587 1.413T19 22zM5 9v11h14V9zM4 7h16V4H4zm5 7h6v-2H9zm3 .5"></svg:path>`,
})
export class MaterialSymbolsInventory2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
