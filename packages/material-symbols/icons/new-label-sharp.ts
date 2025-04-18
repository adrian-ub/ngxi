import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewLabelSharpIcon],svg[material-symbols-new-label-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.2 20q.4-.675.6-1.437T12 17q0-2.5-1.75-4.25T6 11q-1.125 0-2.15.4T2 12.525V4h14l6 8l-6 8zM5 21v-3H2v-2h3v-3h2v3h3v2H7v3z"></svg:path>`,
})
export class MaterialSymbolsNewLabelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
