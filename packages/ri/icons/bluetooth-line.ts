import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBluetoothLineIcon],svg[ri-bluetooth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.312 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364l-1.414-1.415l5.778-5.778v-.97L5.22 5.737l1.414-1.415l4.364 4.364V2h2l5.657 5.657zm-1.314 1.515v5.657l2.828-2.829zm0-3.03l2.828-2.828l-2.828-2.829z"></svg:path>`,
})
export class RiBluetoothLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
