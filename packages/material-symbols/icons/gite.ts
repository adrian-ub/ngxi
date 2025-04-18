import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGiteIcon],svg[material-symbols-gite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-9l4-4h1V4h2v2h9l4 4v9zm14-2h4v-6.175l-2-2l-2 2zM4 17h10v-5H4z"></svg:path>`,
})
export class MaterialSymbolsGiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
