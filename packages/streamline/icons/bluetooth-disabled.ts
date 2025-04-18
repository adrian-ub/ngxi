import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothDisabledIcon],svg[streamline-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75L10.5 4L6.5.5v5.937M.5.5l13 13M3 9.5l1.875-1.375m3.895 3.389L6.5 13.5V9.31"></svg:path>`,
})
export class StreamlineBluetoothDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
