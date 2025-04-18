import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryBox02Icon],svg[hugeicons-delivery-box-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 3H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541C3.66 8 4.286 8 5.54 8h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339C21.324 3 20.948 3 20.198 3M3 8v5.04c0 3.753 0 5.629 1.172 6.794S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.166S21 16.793 21 13.041V8m-11 3h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryBox02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
