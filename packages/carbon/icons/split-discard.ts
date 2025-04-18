import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSplitDiscardIcon],svg[carbon-split-discard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 16A12.01 12.01 0 0 0 17 4.05V2h-2v2.05a11.99 11.99 0 0 0 0 23.9V30h2v-2.05A12.01 12.01 0 0 0 28 16zM16 26V6a10 10 0 0 1 0 20z" fill="currentColor"></svg:path>`,
})
export class CarbonSplitDiscardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
