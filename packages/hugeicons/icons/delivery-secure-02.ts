import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySecure02Icon],svg[hugeicons-delivery-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.339c-.153.273-.116.641-.041 1.379c.125 1.23.187 1.846.513 2.286c.163.22.369.404.606.542c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.323.606-.542c.326-.44.388-1.055.513-2.286c.075-.738.112-1.106-.04-1.38a1 1 0 0 0-.311-.338c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.752 0 5.628 1.172 6.794S7.229 20.5 11 20.5h1M21 10V7.5m-11 3h4m2.737 5.175v-1.391c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39M16.806 21.5h3.388c.997 0 1.806-.807 1.806-1.802v-2.002c0-.996-.809-1.803-1.806-1.803h-3.388c-.997 0-1.806.807-1.806 1.803v2.002c0 .995.809 1.802 1.806 1.802" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliverySecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
