import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartDownIcon],svg[mage-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M18 12h1.874c.6 0 1.087.487 1.087 1.087v7.076c0 .6-.487 1.087-1.087 1.087h-1.873c-.6 0-1.087-.487-1.087-1.087v-7.076c0-.6.487-1.087 1.087-1.087m-6.938-4.625h1.874c.6 0 1.086.487 1.086 1.087v11.701c0 .6-.486 1.087-1.086 1.087h-1.874c-.6 0-1.086-.487-1.086-1.087V8.462c0-.6.486-1.087 1.086-1.087M4.126 2.75h1.873c.6 0 1.087.487 1.087 1.087v16.326c0 .6-.487 1.087-1.087 1.087H4.126c-.6 0-1.087-.487-1.087-1.087V3.837c0-.6.487-1.087 1.087-1.087"></svg:path>`,
})
export class MageChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
