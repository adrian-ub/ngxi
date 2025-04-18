import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShiftRoundedIcon],svg[material-symbols-light-shift-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19.192V12.77H6.744q-.505 0-.74-.447q-.233-.447.071-.85l5.284-7.041q.25-.337.645-.337q.394 0 .637.337l5.284 7.04q.304.404.07.851t-.739.447H15v6.423q0 .344-.232.576t-.576.232H9.808q-.343 0-.576-.232T9 19.192"></svg:path>`,
})
export class MaterialSymbolsLightShiftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
