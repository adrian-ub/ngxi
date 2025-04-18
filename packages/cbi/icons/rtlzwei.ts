import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRtlzweiIcon],svg[cbi-rtlzwei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0zm-.003 6.49l-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076l-3.69.715v9.229l3.69-.717z"></svg:path>`,
})
export class CbiRtlzweiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
