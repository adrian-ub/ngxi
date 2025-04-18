import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinCloudIcon],svg[hugeicons-bitcoin-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5a4.5 4.5 0 1 0-.022-9m0 0q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477m10.958.977a5.5 5.5 0 0 1-1.235 3M6.52 7.523a5 5 0 0 0 0 9.954m0-9.954Q6.757 7.5 7 7.5c1.126 0 2.165.372 3 1m.125 11.5v-6M12 14v-1.5m0 9V20m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H9m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H9" color="currentColor"></svg:path>`,
})
export class HugeiconsBitcoinCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
