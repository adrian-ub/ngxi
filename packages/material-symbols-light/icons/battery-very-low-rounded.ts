import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryVeryLowRoundedIcon],svg[material-symbols-light-battery-very-low-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.289 16.116q-.344 0-.576-.233t-.232-.575v-1.616h-.673q-.343 0-.576-.232T3 12.884v-1.769q0-.343.232-.575q.233-.232.576-.232h.673v-1.62q0-.344.232-.574t.576-.23h14.903q.344 0 .576.233t.232.575v6.612q0 .352-.232.581q-.232.23-.576.23zm.173-1H19V8.885H5.462z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryVeryLowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
