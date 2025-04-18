import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentBulkIcon],svg[ix-document-bulk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.666 170.667L320 256v213.334H85.333V170.667zm-17.685 42.667H128v213.333h149.333V273.686zm81.685-106.667L384 192v213.334l-42.667-.001V209.686l-60.352-60.352l-131.648-.001v-42.666zm64-64L448 128v213.334l-42.667-.001V145.686l-60.352-60.352l-131.648-.001V42.667z"></svg:path>`,
})
export class IxDocumentBulkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
