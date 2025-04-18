import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatUnderlinedIcon],svg[material-symbols-light-format-underlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.692 19.25v-1h12.616v1zM12 16.058q-2.14 0-3.358-1.258t-1.217-3.415V3.827h1.133v7.592q0 1.631.911 2.583q.912.952 2.531.952t2.53-.952t.912-2.583V3.827h1.133v7.558q0 2.157-1.217 3.415T12 16.058"></svg:path>`,
})
export class MaterialSymbolsLightFormatUnderlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
