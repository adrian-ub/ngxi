import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSplitIcon],svg[carbon-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20h2v4h-2zm0-6h2v4h-2zm0-6h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M28 16A12.01 12.01 0 0 0 17 4.05V2h-2v2.05a11.99 11.99 0 0 0 0 23.9V30h2v-2.05A12.01 12.01 0 0 0 28 16M16 26a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class CarbonSplitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
