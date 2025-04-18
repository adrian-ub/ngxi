import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchRoundedIcon],svg[material-symbols-light-switch-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.692 16.5q.344 0 .576-.232t.232-.576V8.308q0-.343-.232-.576t-.576-.232H9.308q-.343 0-.576.232t-.232.576v7.384q0 .344.232.576t.576.232zm-5.192-1v-7h5v7zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm6.387-8.192q.345 0 .575-.233q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23q-.345 0-.575.234q-.23.233-.23.577q0 .345.234.575q.233.23.577.23"></svg:path>`,
})
export class MaterialSymbolsLightSwitchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
