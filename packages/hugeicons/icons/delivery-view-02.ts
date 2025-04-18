import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryView02Icon],svg[hugeicons-delivery-view-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.753 0 5.629 1.172 6.794C5.235 20.392 6.886 20.49 10 20.5m11-8v-5M17 18h.009m4.763-.477c.152.213.228.32.228.477c0 .158-.076.264-.228.477c-.683.958-2.427 3.023-4.772 3.023s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477c.683-.958 2.427-3.023 4.772-3.023s4.089 2.065 4.772 3.023M10 10.5h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryView02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
