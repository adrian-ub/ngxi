import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOutlineRoundedIcon],svg[material-symbols-light-devices-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 19q-.312 0-.531-.22T3 18.246t.219-.53t.531-.216H5V6.616q0-.667.475-1.141T6.615 5H19.5q.213 0 .356.144t.144.357t-.144.356T19.5 6H6.616q-.27 0-.443.173T6 6.616V17.5h4.73q.313 0 .532.22t.219.534q0 .313-.219.53q-.219.216-.531.216zm11.308 0q-.343 0-.576-.232t-.232-.576v-9q0-.343.232-.575t.576-.232h5.154q.343 0 .575.232t.232.575v9q0 .344-.232.576t-.575.232zm.192-1.5h4.77V9.385h-4.77zm0 0h4.77z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
