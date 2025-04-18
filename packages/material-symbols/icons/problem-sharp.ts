import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsProblemSharpIcon],svg[material-symbols-problem-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16q.425 0 .713-.288T8 15t-.288-.712T7 14t-.712.288T6 15t.288.713T7 16m-1-3h2V8H6zm4 2h8v-2h-8zm0-4h8V9h-8zm-8 9V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsProblemSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
