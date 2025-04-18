import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesIcon],svg[material-symbols-light-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-1.5h2V6.616q0-.667.475-1.141T6.615 5H20v1H6.616q-.27 0-.443.173T6 6.616V17.5h5.48V19zm12.058 0q-.343 0-.576-.232t-.232-.576v-9q0-.343.232-.575t.576-.232h5.154q.343 0 .575.232t.232.575v9q0 .344-.232.576t-.575.232z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
