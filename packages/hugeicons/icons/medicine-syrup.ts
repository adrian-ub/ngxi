import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedicineSyrupIcon],svg[hugeicons-medicine-syrup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 15.75C9.5 17.407 10.75 18 12 18s2.5-.593 2.5-2.25S12 12 12 12s-2.5 2.093-2.5 3.75M9.068 2h5.864c.92 0 1.382 0 1.668.293c.533.546.533 2.868 0 3.414C16.313 6 15.853 6 14.932 6H9.068c-.92 0-1.381 0-1.668-.293c-.533-.546-.533-2.868 0-3.414C7.686 2 8.147 2 9.068 2"></svg:path><svg:path d="M8 6a7 7 0 0 1 .306.656a3 3 0 0 1-.23 2.542a7 7 0 0 1-.418.59l-.403.539c-.45.6-.675.9-.838 1.229a4 4 0 0 0-.35 1.05C6 12.965 6 13.34 6 14.092V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-1.908c0-.75 0-1.126-.067-1.487a4 4 0 0 0-.35-1.05c-.163-.328-.388-.628-.838-1.228l-.403-.538a7 7 0 0 1-.419-.59a3 3 0 0 1-.23-2.543c.06-.161.142-.326.307-.656"></svg:path></svg:g>`,
})
export class HugeiconsMedicineSyrupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
