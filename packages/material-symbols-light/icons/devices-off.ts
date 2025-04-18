import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOffIcon],svg[material-symbols-light-devices-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.83 6l-1-1H20v1zm12.19 12.154l-6.77-6.735V9.192q0-.348.23-.578t.578-.23h5.153q.349 0 .579.23t.23.578zm-1.086 3.215L17.566 19h-2.507q-.349 0-.578-.23t-.23-.578v-2.508L6 7.435V17.5h5.48V19H3v-1.5h2V6.435L2.766 4.2l.707-.708l17.17 17.17z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
