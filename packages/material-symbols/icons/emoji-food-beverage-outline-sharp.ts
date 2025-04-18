import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiFoodBeverageOutlineSharpIcon],svg[material-symbols-emoji-food-beverage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-2h16v2zm0-4V3h16q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v7zM6 5h10zm12 3h2V5h-2zm-2 7V5h-6v.4L12 7v5H7V7l2-1.6V5H6v10zM9 5h1z"></svg:path>`,
})
export class MaterialSymbolsEmojiFoodBeverageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
