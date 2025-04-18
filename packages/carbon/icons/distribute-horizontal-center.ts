import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalCenterIcon],svg[carbon-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10h-1V2h-2v8h-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1v8h2v-8h1a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10h-4v-8h4zM12 6h-1V2H9v4H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1v4h2v-4h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 18H8V8h4z"></svg:path>`,
})
export class CarbonDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
