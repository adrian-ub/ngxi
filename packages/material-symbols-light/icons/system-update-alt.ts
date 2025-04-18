import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSystemUpdateAltIcon],svg[material-symbols-light-system-update-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.116v1H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V6.615q0-.23-.192-.423T19.385 6h-4.116V5h4.116q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 14.9l-4.308-4.308l.708-.707l3.1 3.1V5h1v7.985l3.1-3.1l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightSystemUpdateAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
