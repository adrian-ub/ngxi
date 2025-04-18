import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSorting03Icon],svg[hugeicons-sorting-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 8h9m-8 4h6m-4 4h2M10 4h11M5.5 21V3m0 18c-.7 0-2.008-1.994-2.5-2.5M5.5 21c.7 0 2.008-1.994 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSorting03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
