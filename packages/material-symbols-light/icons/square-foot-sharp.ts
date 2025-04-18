import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSquareFootSharpIcon],svg[material-symbols-light-square-foot-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.539 19.462V5.604L7.33 8.396l-.773.773l.469.47l.773-.774l2.139 2.139l-.773.773l.469.47l.773-.774l2.215 2.216l-.773.773l.47.469l.772-.773l2.139 2.138l-.773.773l.469.47l.773-.774l2.696 2.696zM6 18h8.3L6 9.7z"></svg:path>`,
})
export class MaterialSymbolsLightSquareFootSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
