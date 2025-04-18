import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelFilledBottomIcon],svg[carbon-open-panel-filled-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v12H4V6Z"></svg:path>`,
})
export class CarbonOpenPanelFilledBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
