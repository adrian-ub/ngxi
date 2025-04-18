import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPlatformsIcon],svg[carbon-platforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H4c-1.103 0-2-.897-2-2v-6h2v6h24v-6h2v6c0 1.103-.897 2-2 2"></svg:path><svg:path fill="currentColor" d="M17 17v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zM9 17v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zm6-9v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zM5 5v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m2 1h6v6H7z"></svg:path>`,
})
export class CarbonPlatformsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
