import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOutpatientIcon],svg[material-symbols-outpatient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21V3h14v18h-5v-5H6v5zm4-8h2v-2H5zm0-4h2V7H5zm4 4h2v-2H9zm0-4h2V7H9zm10.5 6.5l-1.4-1.4l1.075-1.1H16v-2h3.175L18.1 9.9l1.4-1.4L23 12z"></svg:path>`,
})
export class MaterialSymbolsOutpatientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
