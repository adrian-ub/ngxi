import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimGridIcon],svg[uim-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H2V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"></svg:path><svg:path fill="currentColor" d="M2 8h9v6H2zm0 8h9v6H3a1 1 0 0 1-1-1zm11-8h9v6h-9zm8 14h-8v-6h9v5a1 1 0 0 1-1 1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 8V6H2v2h9v6H2v2h9v6h2v-6h9v-2h-9V8z" opacity=".25"></svg:path>`,
})
export class UimGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
