import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryView01Icon],svg[hugeicons-delivery-view-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 13.5V8H2v5.429c0 4.04 0 6.06 1.302 7.316C4.508 21.908 6.396 21.993 10 22m7-3.5h.009"></svg:path><svg:path d="M21.772 18.023c.152.213.228.32.228.477c0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryView01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
