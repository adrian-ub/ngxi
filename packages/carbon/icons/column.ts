import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonColumnIcon],svg[carbon-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4h2v24h-2zm-6 2v20h-4V6zm0-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 4h2v24H6z"></svg:path>`,
})
export class CarbonColumnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
