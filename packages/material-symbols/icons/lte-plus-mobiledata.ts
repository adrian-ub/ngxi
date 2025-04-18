import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLtePlusMobiledataIcon],svg[material-symbols-lte-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16V8h2v6h3v2zm6 0v-6H5V8h6v2H9v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2zm8-1v-2h-2v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLtePlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
