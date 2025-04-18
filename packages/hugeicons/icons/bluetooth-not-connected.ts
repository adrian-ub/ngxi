import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBluetoothNotConnectedIcon],svg[hugeicons-bluetooth-not-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 3.993l16 16.02M12.01 7.98c0-1.128-.189-3.606.489-4.358c.84-.735 4.167 2.08 5.784 3.433c-.83.852-1.196 1.671-3.617 3.467M17.5 17.51c-2.84 2.061-4.017 3.288-4.871 2.925a.43.43 0 0 1-.202-.18c-.526-.886-.418-3.206-.418-4.284v-3.978l-7.031 4.713" color="currentColor"></svg:path>`,
})
export class HugeiconsBluetoothNotConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
