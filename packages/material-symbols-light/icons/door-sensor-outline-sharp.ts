import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorSensorOutlineSharpIcon],svg[material-symbols-light-door-sensor-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15V5v14zm-1 .5h1V19h6V5H9v9.5H8V4h8v16H8zm4-5.73q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m7-6.27h1v5h-1zm-6.23 12H5.384v-1h7.384z"></svg:path>`,
})
export class MaterialSymbolsLightDoorSensorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
