import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRowIcon],svg[carbon-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24h24v2H4zm22-6H6v-4h20zm2 0v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2M4 6h24v2H4z"></svg:path>`,
})
export class CarbonRowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
