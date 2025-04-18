import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPlaySharpIcon],svg[ion-play-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m96 448l320-192L96 64z"></svg:path>`,
})
export class IonPlaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
