import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryLowRoundedIcon],svg[material-symbols-battery-low-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17q-.425 0-.712-.288T4 16v-2H3q-.425 0-.712-.288T2 13v-2q0-.425.288-.712T3 10h1V8q0-.425.288-.712T5 7h16q.425 0 .713.288T22 8v8q0 .425-.288.713T21 17zm1-2h11V9H6z"></svg:path>`,
})
export class MaterialSymbolsBatteryLowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
