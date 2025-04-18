import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomRightClickSharpIcon],svg[material-symbols-bottom-right-click-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h16V3h2v18zm12-4q-.825 0-1.412-.587T13 15t.588-1.412T15 13t1.413.588T17 15t-.587 1.413T15 17M5 12v-2h3.6L3 4.4L4.4 3L10 8.6V5h2v7z"></svg:path>`,
})
export class MaterialSymbolsBottomRightClickSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
