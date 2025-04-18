import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMagentoIcon],svg[simple-icons-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 24l-4.455-2.572v-12l2.97-1.715v12.001l1.485.902l1.485-.902V7.713l2.971 1.715v12zM22.391 6v12l-2.969 1.714V7.713L12 3.43L4.574 7.713v12.001L1.609 18V6L12 0z"></svg:path>`,
})
export class SimpleIconsMagentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
