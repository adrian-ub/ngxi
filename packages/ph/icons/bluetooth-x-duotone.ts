import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXDuotoneIcon],svg[ph-bluetooth-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 176l-64 48v-96Zm-8.53-102.4L112 32v96l55.47-41.6a8 8 0 0 0 0-12.8" opacity=".2"></svg:path><svg:path d="M180.8 169.6L125.33 128l23.47-17.6a8 8 0 0 0-9.6-12.8L120 112V48l19.2 14.4a8 8 0 1 0 9.6-12.8l-32-24A8 8 0 0 0 104 32v80L52.8 73.6a8 8 0 0 0-9.6 12.8L98.67 128L43.2 169.6a8 8 0 1 0 9.6 12.8L104 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M120 208v-64l42.67 32ZM237.66 98.34a8 8 0 0 1-11.32 11.32L208 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L196.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L208 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L219.31 80Z"></svg:path></svg:g>`,
})
export class PhBluetoothXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
