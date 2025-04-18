import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHorizontalViewIcon],svg[carbon-horizontal-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 20h-.002L4 28h24v-8zm24-6H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 4h-.002L4 12h24V4z"></svg:path>`,
})
export class CarbonHorizontalViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
