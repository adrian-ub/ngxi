import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer10SelectIcon],svg[material-symbols-timer-10-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h3V8h-3zm0 3q-1.25 0-2.125-.875T7 16V8q0-1.25.875-2.125T10 5h3q1.25 0 2.125.875T16 8v8q0 1.25-.875 2.125T13 19zm-7 0V8H1V5h5v14zm14 0v-2h4v-1h-2.65q-.575 0-.962-.387T17 14.65v-2.3q0-.575.388-.962T18.35 11H23v2h-4v1h2.65q.575 0 .963.388t.387.962v2.3q0 .575-.387.963T21.65 19z"></svg:path>`,
})
export class MaterialSymbolsTimer10SelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
