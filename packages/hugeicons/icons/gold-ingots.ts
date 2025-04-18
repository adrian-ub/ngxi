import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoldIngotsIcon],svg[hugeicons-gold-ingots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.27 15.084c.693-1.457 1.04-2.186 1.644-2.607q.074-.051.15-.098C5.691 12 6.461 12 8 12s2.308 0 2.937.38q.075.046.149.096c.604.422.951 1.15 1.645 2.608c1.034 2.173 1.55 3.26 1.112 4.058l-.052.089C13.308 20 12.161 20 9.87 20H6.13c-2.292 0-3.439 0-3.922-.77l-.052-.088c-.439-.798.078-1.885 1.112-4.058m11.279-3.064c.396-.02.869-.02 1.452-.02c1.538 0 2.308 0 2.937.38q.075.046.149.096c.604.422.951 1.15 1.645 2.608c1.034 2.173 1.55 3.26 1.112 4.058q-.024.045-.052.089c-.483.769-1.63.769-3.922.769h-1.129m.868-11c-.216-.528-.515-1.156-.876-1.916c-.694-1.457-1.04-2.186-1.645-2.607a3 3 0 0 0-.15-.098C14.309 4 13.539 4 12 4s-2.308 0-2.937.38q-.075.045-.15.096c-.603.422-.95 1.15-1.644 2.608c-.362.76-.66 1.388-.876 1.916" color="currentColor"></svg:path>`,
})
export class HugeiconsGoldIngotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
