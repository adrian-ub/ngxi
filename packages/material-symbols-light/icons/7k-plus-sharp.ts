import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight7kPlusSharpIcon],svg[material-symbols-light-7k-plus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.52 14.692h.98l1.508-4.469v-.915H6.173v.884h2.88zm3.634 0h.884v-2.365l2.289 2.365h1.212l-2.635-2.73l2.635-2.654h-1.173l-2.327 2.327V9.308h-.885zm5.577-.807h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLight7kPlusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
