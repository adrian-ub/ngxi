import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryBox01Icon],svg[hugeicons-delivery-box-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.429V8h20v5.429c0 4.04 0 6.06-1.302 7.316C19.396 22 17.301 22 13.111 22H10.89c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryBox01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
