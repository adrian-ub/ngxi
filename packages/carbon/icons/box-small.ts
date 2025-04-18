import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBoxSmallIcon],svg[carbon-box-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxSmallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
