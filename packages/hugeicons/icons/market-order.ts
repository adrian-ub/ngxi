import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMarketOrderIcon],svg[hugeicons-market-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 13.75a3.73 3.73 0 0 1-2.068-.622L5.779 17.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l4.403-4.402A3.751 3.751 0 0 1 12.25 6.25C14.32 6.25 16 7.93 16 10s-1.68 3.75-3.75 3.75m0-6C11.01 7.75 10 8.76 10 10s1.01 2.25 2.25 2.25S14.5 11.24 14.5 10s-1.01-2.25-2.25-2.25m5.25 2.26c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m3-.01c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m-14.25.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.74c0 .42-.34.76-.75.76m-3-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.75s-.34.76-.75.76zM11.5 10c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMarketOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
