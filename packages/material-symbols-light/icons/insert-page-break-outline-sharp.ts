import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInsertPageBreakOutlineSharpIcon],svg[material-symbols-light-insert-page-break-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-4.5h1V20h12v-3.5h1V21zm0-9.5V3h9.5L19 7.5v4h-1V8h-4V4H6v7.5zm4.192 3v-1h5.616v1zm7.616 0v-1h5.615v1zm-15.231 0v-1h5.615v1zM12 16.5"></svg:path>`,
})
export class MaterialSymbolsLightInsertPageBreakOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
