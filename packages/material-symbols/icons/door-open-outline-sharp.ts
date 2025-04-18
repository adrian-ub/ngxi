import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorOpenOutlineSharpIcon],svg[material-symbols-door-open-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13q.425 0 .713-.288T12 12t-.288-.712T11 11t-.712.288T10 12t.288.713T11 13m-4 8v-2l6-1V5.975L7 5V3l8 1.3v15.35zm-4 0v-2h2V3h14v16h2v2zm4-2h10V5H7z"></svg:path>`,
})
export class MaterialSymbolsDoorOpenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
