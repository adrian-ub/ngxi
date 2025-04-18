import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEarphoneBluetoothIcon],svg[marketeq-earphone-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M13.688 26.604a14.4 14.4 0 0 1-1.188-5.77a14.583 14.583 0 1 1 29.167 0M18.75 33.333l-2.083 2.084"></svg:path><svg:path stroke="#306CFE" d="M35.82 28.042L22.56 41.3a8.333 8.333 0 0 1-11.785-11.785l13.259-13.259a2.083 2.083 0 0 1 2.946 0l8.839 8.84a2.083 2.083 0 0 1 0 2.946"></svg:path></svg:g>`,
})
export class MarketeqEarphoneBluetoothIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
