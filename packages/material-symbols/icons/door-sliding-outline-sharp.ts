import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorSlidingOutlineSharpIcon],svg[material-symbols-door-sliding-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13q-.425 0-.712-.288T8 12t.288-.712T9 11t.713.288T10 12t-.288.713T9 13m6 0q-.425 0-.712-.288T14 12t.288-.712T15 11t.713.288T16 12t-.288.713T15 13M3 21v-2h1V3h16v16h1v2zm3-2h5V5H6zm7 0h5V5h-5zm-1-8"></svg:path>`,
})
export class MaterialSymbolsDoorSlidingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
