import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBacklightHighIcon],svg[material-symbols-backlight-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15v-2h4v2zm5.35-5.25L3.525 6.925l1.4-1.425L7.75 8.35zM7 18v-3h10v3zm4-11V2h2v5zm6.65 2.75l-1.4-1.4l2.825-2.825l1.425 1.4zM19 15v-2h4v2z"></svg:path>`,
})
export class MaterialSymbolsBacklightHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
