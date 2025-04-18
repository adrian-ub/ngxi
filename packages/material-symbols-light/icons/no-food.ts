import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoFoodIcon],svg[material-symbols-light-no-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.09 22.53l-7.146-7.145H2.442q0-1.737 1.79-2.984t4.826-1.247q.298 0 .592.012t.554.051v1.421L.867 3.308l.714-.714l19.223 19.223zM2.443 18.693v-1h13.231v1zM3.212 22q-.31 0-.54-.23t-.23-.54V21h13.231v.23q0 .31-.23.54t-.54.23zm17.105-3.48l-8.482-8.497l-.508-3.638h4.615v-4h1v4h4.616z"></svg:path>`,
})
export class MaterialSymbolsLightNoFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
