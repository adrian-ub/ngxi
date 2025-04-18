import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGiftCardIcon],svg[hugeicons-gift-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10c0-2.828 0-4.243.879-5.121C3.757 4 5.172 4 8 4h8c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14z"></svg:path><svg:path d="M6 9.904C6 5.36 12 9.99 12 13H8.5C6.763 13 6 11.47 6 9.904m12 0C18 5.36 12 9.99 12 13h3.5c1.737 0 2.5-1.53 2.5-3.096M12 4v16M2 13h20m-7 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class HugeiconsGiftCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
