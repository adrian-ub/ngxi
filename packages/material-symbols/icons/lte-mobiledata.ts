import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLteMobiledataIcon],svg[material-symbols-lte-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V8h2v6h3v2zm7 0v-6H9V8h6v2h-2v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2z"></svg:path>`,
})
export class MaterialSymbolsLteMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
