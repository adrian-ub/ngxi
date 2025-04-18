import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionToggleSharpIcon],svg[ion-toggle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288m0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86"></svg:path>`,
})
export class IonToggleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
