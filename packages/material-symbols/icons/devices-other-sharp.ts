import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesOtherSharpIcon],svg[material-symbols-devices-other-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20H2V4h18v2H4v12h3zm4-2.5q.625 0 1.063-.437T12.5 16t-.437-1.062T11 14.5t-1.062.438T9.5 16t.438 1.063T11 17.5M22 20h-7V9h7zM9 20v-1.775q-.475-.425-.737-1T8 16t.263-1.225t.737-1V12h4v1.775q.475.425.738 1T14 16t-.262 1.225t-.738 1V20z"></svg:path>`,
})
export class MaterialSymbolsDevicesOtherSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
