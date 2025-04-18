import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShelfPositionOutlineIcon],svg[material-symbols-light-shelf-position-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM19 15.5H5v2.885q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.424zm-2.884-1H19V5.616q0-.231-.192-.424T18.384 5h-2.269zM5 14.5h2.885V5h-2.27q-.23 0-.423.192T5 5.616zm3.885 0h6.23V5h-6.23z"></svg:path>`,
})
export class MaterialSymbolsLightShelfPositionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
