import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPulmonologySharpIcon],svg[material-symbols-pulmonology-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v7.6l3 3l1.05-1.05L14.525 9V5H18.7l3.3 8.825V21h-9v-5l.4-3.2l-1.4-1.4l-1.4 1.4l.4 3.2v5H2v-7.175L5.3 5h4.2v4l-2.55 2.55L8 12.6l3-3z"></svg:path>`,
})
export class MaterialSymbolsPulmonologySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
