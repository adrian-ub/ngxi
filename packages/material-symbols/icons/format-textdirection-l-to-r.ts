import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatTextdirectionLToRIcon],svg[material-symbols-format-textdirection-l-to-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15v-5q-1.65 0-2.825-1.175T5 6t1.175-2.825T9 2h8v2h-2v11h-2V4h-2v11zm8 7l-1.4-1.4l1.6-1.6H3v-2h14.2l-1.6-1.6L17 14l4 4z"></svg:path>`,
})
export class MaterialSymbolsFormatTextdirectionLToRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
