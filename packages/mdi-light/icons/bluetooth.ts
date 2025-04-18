import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBluetoothIcon],svg[mdi-light-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h1l4.85 4.85l-4.64 4.65l4.64 4.65L12 22h-1v-8.29l-4.45 4.45l-.71-.71l4.95-4.95l-4.95-4.95l.71-.71L11 11.29zm1 1.41v6.88l3.44-3.44zm0 16.18l3.44-3.44L12 13.71z"></svg:path>`,
})
export class MdiLightBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
