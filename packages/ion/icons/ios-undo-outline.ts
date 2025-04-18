import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosUndoOutlineIcon],svg[ion-ios-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.9 368.2c0-16.8 3.6-83.1-48.7-135.7-35.2-35.4-80.3-53.4-143.3-56.2V96L64 224l192 128v-79.8c40 1.1 62.4 9.1 86.7 20 30.9 13.8 55.3 44 75.8 76.6l19.2 31.2H448c0-10.1-.1-22.9-.1-31.8zm-15.7-6.8C384.6 280.6 331 256 240 256v64.8L91.9 224.1 240 127.3V192c201 0 192.2 169.4 192.2 169.4z" fill="currentColor"></svg:path>`,
})
export class IonIosUndoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
