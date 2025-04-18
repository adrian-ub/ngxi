import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorSensorSharpIcon],svg[material-symbols-light-door-sensor-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-3.73h5.539v-2.54H8V4h8v16zm-2.615-4.5v-1h7.384v1zM12 9.77q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m7-1.27v-5h1v5z"></svg:path>`,
})
export class MaterialSymbolsLightDoorSensorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
