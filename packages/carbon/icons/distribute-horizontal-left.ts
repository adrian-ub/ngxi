import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalLeftIcon],svg[carbon-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m-4-10v8h4v-8zM18 2h2v28h-2zm-6 24H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M8 8v16h4V8zM2 2h2v28H2z"></svg:path>`,
})
export class CarbonDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
