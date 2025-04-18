import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitRowsIcon],svg[gravity-ui-layout-split-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 4v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1M15 5V4a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 1 4v1a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 15 5m-1.5 6v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m1.5 1v-1a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 1 11v1a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 15 12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutSplitRowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
