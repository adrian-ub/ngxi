import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFridgeIcon],svg[si-glyph-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .003c-.553 0-1 .444-1 .992V3.99c0 .548.447.992 1 .992h6c.553 0 1-.444 1-.992V.995a.996.996 0 0 0-1-.992zm6.042 2.038H9.958V.958h1.084zM5 5.99c-.553 0-1 .451-1 1.01v6.894c0 .558.447 1.01 1 1.01L5.021 16H6.98v-1.097h2.041V16h1.959v-1.097c.573 0 1.02-.452 1.02-1.01V6.999c0-.558-.447-1.009-1-1.009zm6.042 3.051H9.958V6.875h1.084z"></svg:path>`,
})
export class SiGlyphFridgeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
