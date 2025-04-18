import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlowModelerIcon],svg[carbon-flow-modeler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H2V2h8zM4 8h4V4H4zm26 22h-8v-8h8zm-6-2h4v-4h-4zm-4-1H8a6 6 0 0 1 0-12v2a4 4 0 0 0 0 8h12zm4-10v-2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12"></svg:path><svg:path fill="currentColor" d="M19 11h-6l-3 4l6 6l6-6Z"></svg:path>`,
})
export class CarbonFlowModelerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
