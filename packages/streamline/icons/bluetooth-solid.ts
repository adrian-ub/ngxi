import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSolidIcon],svg[streamline-bluetooth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.272.142a1 1 0 0 1 1.042.083l4.404 3.213A1 1 0 0 1 11.65 5.1L8.542 7l3.108 1.9a1 1 0 0 1 .068 1.662l-4.404 3.213a1 1 0 0 1-1.59-.808V8.722l-2.33 1.426A1 1 0 0 1 2.35 8.442L4.708 7L2.35 5.558a1 1 0 1 1 1.043-1.706l2.332 1.426V1.033a1 1 0 0 1 .547-.891m1.453 8.703l1.606.982L7.725 11zm0-3.69V3.001L9.33 4.173z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBluetoothSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
