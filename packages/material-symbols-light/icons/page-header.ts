import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageHeaderIcon],svg[material-symbols-light-page-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4h16v1zm14.385 2.385q.69 0 1.153.462T20 9v9.385q0 .69-.462 1.153T18.384 20H5.616q-.691 0-1.153-.462T4 18.384V9q0-.69.463-1.153t1.153-.463z"></svg:path>`,
})
export class MaterialSymbolsLightPageHeaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
