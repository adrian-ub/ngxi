import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKissingIcon],svg[hugeicons-kissing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 21.37A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c5.645 0 10.265 4.871 9.988 10.5"></svg:path><svg:path d="M17 9.5a1.5 1.5 0 0 0-3 0M8.009 9H8m2 5c.742 0 2.215.284 2.832.796c.562.466-.909.858-.909 1.204s1.585.644.91 1.204c-.618.512-2.091.796-2.833.796m9.35-3.09c.856-.476 1.917-.139 2.404.79c.487.928.227 2.101-.576 2.679l-1.555.987c-.753.479-1.13.718-1.502.608s-.59-.526-1.026-1.356l-.9-1.712c-.433-.943-.126-2.104.716-2.638c.843-.534 1.913-.244 2.44.642"></svg:path></svg:g>`,
})
export class HugeiconsKissingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
