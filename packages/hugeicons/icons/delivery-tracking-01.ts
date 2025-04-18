import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTracking01Icon],svg[hugeicons-delivery-tracking-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 22h-1.611c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v2.5"></svg:path><svg:path d="M18 12c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.155c.705.624 1.559 1.662 2.071 2.503c.246.403.594.403.858 0c.538-.825 1.366-1.879 2.071-2.503c1-.887 1.5-1.879 1.5-3.155c0-2.23-1.79-4.04-4-4.04m0 4h.009M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h2"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryTracking01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
