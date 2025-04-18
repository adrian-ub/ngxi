import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOffSharpIcon],svg[ion-videocam-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m57.376 79.998l22.627-22.627L438.633 416l-22.627 22.628zM32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.9 15.9 0 0 0 9.34-3l-285-285Zm304 96v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112Z"></svg:path>`,
})
export class IonVideocamOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
