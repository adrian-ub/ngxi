import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLimitOrderIcon],svg[hugeicons-limit-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.44 7.75l3.893 3.893a3.751 3.751 0 0 0 2.917 6.107c2.07 0 3.75-1.68 3.75-3.75a3.75 3.75 0 0 0-5.505-3.315L6.28 6.47a.75.75 0 0 0-.53-.22h-2.5c-.41 0-.75.34-.75.75s.34.75.75.75zm6.81 4C11.01 11.75 10 12.76 10 14s1.01 2.25 2.25 2.25S14.5 15.24 14.5 14s-1.01-2.25-2.25-2.25m5.25 2.26c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m3-.01c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m-14.25.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.74c0 .42-.34.76-.75.76m-3-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.75s-.34.76-.75.76zM11.5 14c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsLimitOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
