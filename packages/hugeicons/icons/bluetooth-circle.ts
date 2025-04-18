import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBluetoothCircleIcon],svg[hugeicons-bluetooth-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M11.595 12V8.612c0-.943 0-1.415.294-1.57c.295-.154.67.12 1.421.668l.845.618c.563.41.845.616.845.901s-.282.491-.845.902zm0 0v3.388c0 .943 0 1.414.294 1.57c.295.154.67-.12 1.421-.668l.845-.617c.563-.412.845-.617.845-.902s-.282-.491-.845-.902zm0 0L9 9.778M11.595 12L9 14.222"></svg:path></svg:g>`,
})
export class HugeiconsBluetoothCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
