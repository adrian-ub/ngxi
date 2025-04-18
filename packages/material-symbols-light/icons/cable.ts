import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCableIcon],svg[material-symbols-light-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20.5q-.213 0-.356-.144T4.5 20v-1.115h-1v-3.5q0-.213.144-.357T4 14.884h1.5V7q0-1.458 1.021-2.479T9 3.5t2.479 1.021T12.5 7v10q0 1.056.722 1.778T15 19.5t1.778-.722T17.5 17V9.116H16q-.213 0-.356-.144t-.144-.356v-3.5h1V4q0-.213.144-.356T17 3.5h2q.213 0 .356.144T19.5 4v1.116h1v3.5q0 .212-.144.356T20 9.116h-1.5V17q0 1.458-1.021 2.479T15 20.5t-2.479-1.021T11.5 17V7q0-1.056-.722-1.778T9 4.5t-1.778.722T6.5 7v7.885H8q.213 0 .356.143t.144.356v3.5h-1V20q0 .213-.144.356T7 20.5z"></svg:path>`,
})
export class MaterialSymbolsLightCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
