import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMenuRestaurantIcon],svg[hugeicons-menu-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 18v-8c0-1.886 0-2.829-.586-3.414C18.828 6 17.886 6 16 6H4v12c0 1.885 0 2.828.586 3.414S6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586S20 19.885 20 18"></svg:path><svg:path d="M12 11a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3m3-3v-1m3 4H9m6 0h1m-7 0H8m0 4h8M4 6l7.385-3.094c1.649-.691 2.473-1.037 3.13-.86a2 2 0 0 1 1.07.717C16 3.305 16 4.203 16 6"></svg:path></svg:g>`,
})
export class HugeiconsMenuRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
