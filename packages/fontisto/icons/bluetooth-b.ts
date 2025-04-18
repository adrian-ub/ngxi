import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBluetoothBIcon],svg[fontisto-bluetooth-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.446 19.058l2.32-2.303l-2.32-2.303zm0-9.508l2.32-2.303l-2.32-2.303zM7.875 12l4.768 4.768L5.424 24v-9.52l-3.978 3.964L0 16.995L4.982 12L0 7.005l1.446-1.446l3.978 3.962V.001l7.216 7.232z"></svg:path>`,
})
export class FontistoBluetoothBIcon {
  readonly viewBox = input("0 0 13 24")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
