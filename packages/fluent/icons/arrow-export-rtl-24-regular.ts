import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExportRtl24RegularIcon],svg[fluent-arrow-export-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.244 4.5a.75.75 0 0 0-.743.648l-.007.102l.002 13.004a.75.75 0 0 0 1.493.102l.007-.102l-.002-13.004a.75.75 0 0 0-.75-.75M8.349 6.304l-.073-.084a.75.75 0 0 0-.976-.073l-.084.073l-4.997 4.997a.75.75 0 0 0-.073.976l.073.085l4.996 5.003a.75.75 0 0 0 1.134-.976l-.072-.084l-3.71-3.717h13.676a.75.75 0 0 0 .743-.647l.007-.102a.75.75 0 0 0-.648-.743l-.102-.007l-13.69-.001L8.276 7.28a.75.75 0 0 0 .073-.976l-.073-.084z"></svg:path>`,
})
export class FluentArrowExportRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
