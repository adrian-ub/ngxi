import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBacklightLowIcon],svg[material-symbols-backlight-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15v-2h3v2zm4.35-5.25L4.225 7.625l1.4-1.4L7.75 8.35zM7 18v-3h10v3zm4-11V4h2v3zm6.65 2.775l-1.4-1.425l2.125-2.125l1.4 1.425zM19 15v-2h3v2z"></svg:path>`,
})
export class MaterialSymbolsBacklightLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
