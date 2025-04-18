import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlowConnectionIcon],svg[carbon-flow-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 18h-6a2 2 0 0 0-2 2v2h-5.586L10 17.586V12h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v5.586l-4.707 4.707a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0L14.414 24H20v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M6 4h6v6H6Zm3 22.586L5.414 23L9 19.414L12.586 23ZM22 26v-6h6v6Z"></svg:path>`,
})
export class CarbonFlowConnectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
