import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMagentoIcon],svg[fontisto-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 19.368V7.8l-7.5-4.632L2.7 7.8v11.568L0 17.7V6.3L10.2 0l10.2 6.3v11.4zm-9 1.306l1.5.926l1.5-.926V7.262L15 9.3v11.735L10.2 24l-4.8-2.965V9.3l3.3-2.038z"></svg:path><svg:path fill="currentColor" d="m17.7 7.8l-7.5-4.632L2.7 7.8v.009L0 6.3L10.2 0l10.2 6.3l-2.7 1.509zM15 9.32l-3.3 1.844V7.262L15 9.3zm-6.3 1.844L5.4 9.318V9.3l3.3-2.038z"></svg:path>`,
})
export class FontistoMagentoIcon {
  readonly viewBox = input("0 0 20 24")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
