import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTracking02Icon],svg[hugeicons-delivery-tracking-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.753 0 5.629 1.172 6.794S7.229 20.5 11 20.5h1.5M21 9V7.5m-3 4c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.155c.705.624 1.559 1.662 2.071 2.503c.246.403.594.403.858 0c.538-.825 1.366-1.879 2.071-2.503c1-.887 1.5-1.879 1.5-3.155c0-2.231-1.79-4.04-4-4.04m0 4h.009M10 10.5h2" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryTracking02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
