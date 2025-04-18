import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBluetoothBIcon],svg[la-bluetooth-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.594v9.969L9.719 9.28L8.28 10.72L13.562 16l-5.28 5.281l1.437 1.438L14 18.437v9.97l1.719-1.688l5-5l.687-.719l-.687-.719L16.437 16l4.282-4.281l.687-.719l-.687-.719l-5-5zm2 4.844L18.563 11L16 13.563zm0 10L18.563 21L16 23.563z"></svg:path>`,
})
export class LaBluetoothBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
