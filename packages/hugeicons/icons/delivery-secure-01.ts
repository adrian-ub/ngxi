import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySecure01Icon],svg[hugeicons-delivery-secure-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22h-1.111c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v3.5M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"></svg:path><svg:path d="M16.737 16.175v-1.391c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39M16.806 22h3.388c.997 0 1.806-.807 1.806-1.802v-2.003c0-.995-.809-1.802-1.806-1.802h-3.388c-.997 0-1.806.807-1.806 1.802v2.003c0 .995.809 1.802 1.806 1.802"></svg:path></svg:g>`,
})
export class HugeiconsDeliverySecure01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
