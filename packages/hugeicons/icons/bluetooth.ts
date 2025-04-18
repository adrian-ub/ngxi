import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBluetoothIcon],svg[hugeicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12V6.666c0-1.862 0-2.793.585-3.088s1.324.264 2.803 1.38l.705.534c1.036.783 1.553 1.174 1.553 1.707s-.517.925-1.553 1.707zm0 0v5.334c0 1.862 0 2.793.585 3.088s1.324-.264 2.803-1.38l.705-.534c1.036-.783 1.553-1.174 1.553-1.707s-.517-.925-1.553-1.707zm0 0L5.645 7.2M12 12l-6.353 4.8M19 12h.009M5 12h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
