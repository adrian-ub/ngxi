import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiReceiptIcon],svg[arcticons-emoji-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.834 6.917v34.03m20.332 0V6.917m-20.332 0L16.542 5.5l1.696 1.528l3.074-1.33l2.58 1.355l2.967-1.283l2.473 1.135l2.51-1.208l2.278 1.164m.046 34.086L31.218 42.5l-1.697-1.529l-3.074 1.332l-2.58-1.356L20.9 42.23l-2.473-1.134l-2.51 1.208l-2.044-1.26M16.8 17.556h6.967m4.29.003h3.002M16.8 22.162h6.448m4.809.004h3.002M16.8 26.751h5.633m5.624.023h3.002m-3.002 5.436h3.002"></svg:path>`,
})
export class ArcticonsEmojiReceiptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
