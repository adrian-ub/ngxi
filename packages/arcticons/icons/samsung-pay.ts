import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungPayIcon],svg[arcticons-samsung-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 27.946V15.98h3.917c2.215 0 4.01 1.799 4.01 4.018s-1.795 4.018-4.01 4.018H11.5m25 .974v4.038a2.99 2.99 0 0 1-2.991 2.991h0a2.98 2.98 0 0 1-2.115-.876"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 20.054v4.936a2.99 2.99 0 0 1-2.991 2.99h0a2.99 2.99 0 0 1-2.991-2.99v-4.936m-2.992 4.936a2.99 2.99 0 0 1-2.99 2.99h0a2.99 2.99 0 0 1-2.992-2.99v-1.945a2.99 2.99 0 0 1 2.991-2.99h0a2.99 2.99 0 0 1 2.991 2.99m0 4.936v-7.927"></svg:path>`,
})
export class ArcticonsSamsungPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
