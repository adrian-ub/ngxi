import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTravelBagIcon],svg[hugeicons-travel-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 6.5H9c-2.828 0-4.243 0-5.121.879C3 8.257 3 9.672 3 12.5V15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-2.5c0-2.828 0-4.243-.879-5.121C19.243 6.5 17.828 6.5 15 6.5m-6 0V6c0-1.414 0-2.121.44-2.56C9.878 3 10.585 3 12 3s2.121 0 2.56.44C15 3.878 15 4.585 15 6v.5"></svg:path><svg:path d="M21 10.5a4 4 0 0 1-4-4M9.25 12l-.75.75l.75.75l.75-.75zM3 17a4 4 0 0 1 4 4M3 10.5a4 4 0 0 0 4-4M21 17a4 4 0 0 0-4 4m-3-4.2l-1.5-.3l1.2-1.2zm.5-5.8v.01"></svg:path></svg:g>`,
})
export class HugeiconsTravelBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
