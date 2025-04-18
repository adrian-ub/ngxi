import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStrategyIcon],svg[hugeicons-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 11l2.346-2.151c.436-.4.654-.6.654-.849m-3-3l2.346 2.151c.436.4.654.6.654.849m0 0C3 8 3 21 3 21"></svg:path><svg:circle cx="5.5" cy="5.5" r="2.5"></svg:circle><svg:path d="m13 21l5-5m0 5l-5-5"></svg:path></svg:g>`,
})
export class HugeiconsStrategyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
