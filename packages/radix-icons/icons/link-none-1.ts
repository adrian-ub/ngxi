import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsLinkNone1Icon],svg[radix-icons-link-none-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.564 4H5.5a.5.5 0 0 1 0 1h-.875c-.604 0-.836.002-1.019.037c-.803.154-1.414.752-1.568 1.496c-.035.17-.038.384-.038.967c0 .582.003.798.038.967c.154.744.765 1.342 1.568 1.496c.183.035.415.037 1.019.037H5.5a.5.5 0 1 1 0 1h-.935c-.523 0-.858 0-1.147-.055c-1.18-.226-2.12-1.116-2.36-2.275C1 8.387 1 8.06 1 7.563v-.126c0-.497 0-.824.058-1.107c.24-1.16 1.18-2.05 2.36-2.275C3.708 4 4.042 4 4.564 4m6.83 1.037C11.21 5.002 10.979 5 10.375 5H9.5a.5.5 0 1 1 0-1h.935c.523 0 .858 0 1.146.055c1.18.225 2.12 1.115 2.36 2.275c.06.283.06.61.059 1.107v.126c0 .497 0 .824-.059 1.107c-.24 1.16-1.18 2.05-2.36 2.275c-.288.055-.623.055-1.145.055H9.5a.5.5 0 0 1 0-1h.875c.604 0 .836-.002 1.019-.037c.803-.154 1.414-.752 1.568-1.496c.035-.17.038-.385.038-.967c0-.583-.003-.798-.038-.967c-.154-.744-.765-1.343-1.568-1.496" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsLinkNone1Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
