import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVerticalViewIcon],svg[carbon-vertical-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h8V4zm24 26h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M20 4v24h8V4z"></svg:path>`,
})
export class CarbonVerticalViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
