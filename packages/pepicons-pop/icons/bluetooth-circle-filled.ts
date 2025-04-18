import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothCircleFilledIcon],svg[pepicons-pop-bluetooth-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBluetoothCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m14.535 13.795l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25a1 1 0 0 0-1.606.795V13a1 1 0 0 0 1.606.795m.394-7.274L17.85 8.75l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m14.535 22.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 12.93 13v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M14.526 12.198a1 1 0 1 1-1.195 1.604L6.366 8.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M14.526 13.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBluetoothCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBluetoothCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
