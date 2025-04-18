import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsBluetoothIcon],svg[pepicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m11.535 10.795l5.572-4.25a1 1 0 0 0 0-1.59L11.535.705A1 1 0 0 0 9.93 1.5V10a1 1 0 0 0 1.606.795Zm.394-7.274L14.85 5.75l-2.92 2.23V3.52Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m11.535 19.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 9.93 10v8.5a1 1 0 0 0 1.606.795Zm.394-7.274l2.922 2.229l-2.922 2.23v-4.46Z" clip-rule="evenodd"></svg:path><svg:path d="M11.526 9.198a1 1 0 1 1-1.195 1.604L3.366 5.607a1 1 0 1 1 1.196-1.603l6.964 5.194Z"></svg:path><svg:path d="M11.526 10.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603l6.964-5.194Z"></svg:path></svg:g>`,
})
export class PepiconsBluetoothIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
