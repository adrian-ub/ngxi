import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmZProcessorCapacityReferenceIcon],svg[carbon-ibm-z-processor-capacity-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 25h2v4h-2zm-4-2h2v6h-2zm8-3h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M30 17V5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v24h2V5h9v12zM13 3H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M4 5.964L12.3 12L4 18.037zM4 27v-5.037L10.925 27zm9-.963L4.7 20l8.3-6.036zm0-16L6.075 5H13z"></svg:path>`,
})
export class CarbonIbmZProcessorCapacityReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
