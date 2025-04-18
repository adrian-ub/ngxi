import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSensorWindowSharpIcon],svg[material-symbols-light-sensor-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20.98V3.02h14v17.96zm1.77-9.615h3.73v-.769h3v.77h3.73V4.712H6.77zm0 1v6.924h10.46v-6.924zM6 4.02v15.962h12V4.019z"></svg:path>`,
})
export class MaterialSymbolsLightSensorWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
