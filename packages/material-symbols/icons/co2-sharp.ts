import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCo2SharpIcon],svg[material-symbols-co2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15V9h5v6zm1.5-1.5h2v-3h-2zM3 15V9h5v2H6.5v-.5h-2v3h2V13H8v2zm14 3v-3.5h3v-1h-3V12h4.5v3.5h-3v1h3V18z"></svg:path>`,
})
export class MaterialSymbolsCo2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
