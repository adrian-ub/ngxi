import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorFrontSharpIcon],svg[material-symbols-door-front-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18v-2h-2V3H5v16H3zm11-8q-.425 0-.712-.288T13 12t.288-.712T14 11t.713.288T15 12t-.288.713T14 13"></svg:path>`,
})
export class MaterialSymbolsDoorFrontSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
