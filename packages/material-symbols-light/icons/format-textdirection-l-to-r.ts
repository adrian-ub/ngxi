import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatTextdirectionLToRIcon],svg[material-symbols-light-format-textdirection-l-to-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.135 14.5V9.73h-.443q-1.4 0-2.373-.982t-.973-2.382t.973-2.383T9.692 3h6.231v1h-1.884v10.5h-1V4h-1.905v10.5zm6.692 6.5l-.708-.708l1.966-1.965H4v-1h14.066L16.1 15.361l.727-.726L20 17.808z"></svg:path>`,
})
export class MaterialSymbolsLightFormatTextdirectionLToRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
