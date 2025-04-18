import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSensorWindowOutlineSharpIcon],svg[material-symbols-light-sensor-window-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20.98V3.02h14v17.96zm1-9.48h4.5v-.77h3v.77H18V4.02H6zm0 1v7.48h12V12.5zm0 7.48h12z"></svg:path>`,
})
export class MaterialSymbolsLightSensorWindowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
