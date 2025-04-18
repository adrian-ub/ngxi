import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalRightIcon],svg[carbon-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h2v28h-2zm-4 20h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m-4-10h-.001L20 20h4v-8zM12 2h2v28h-2zM8 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8h-.002L4 24h4V8z"></svg:path>`,
})
export class CarbonDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
