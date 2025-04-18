import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeskIcon],svg[material-symbols-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V6h20v12h-2v-2h-4v2h-2V8H4v10zm14-8h4V8h-4zm0 4h4v-2h-4z"></svg:path>`,
})
export class MaterialSymbolsDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
