import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryFullAltIcon],svg[material-symbols-light-battery-full-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.289 16.116q-.344 0-.576-.233t-.232-.575v-1.616H3v-3.384h1.48v-1.62q0-.344.233-.574q.232-.23.576-.23h14.903q.344 0 .576.233t.232.575v6.613q0 .35-.232.58t-.576.23z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryFullAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
