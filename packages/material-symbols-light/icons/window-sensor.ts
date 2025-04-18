import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWindowSensorIcon],svg[material-symbols-light-window-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9q-.213 0-.357-.144T21 8.5v-4q0-.213.144-.356T21.501 4t.356.144T22 4.5v4q0 .213-.144.356T21.499 9M4 20V4h14v16zm1.77-8.5h4.46v-.77h1.54v.77h4.46V5.77H5.77zm0 6.73h10.46V12.5H5.77zM5 19h12V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightWindowSensorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
