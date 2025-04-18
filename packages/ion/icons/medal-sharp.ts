import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMedalSharpIcon],svg[ion-medal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32L16 160h289.11l80.22-128z"></svg:path><svg:path fill="currentColor" d="M496 144L424 32L298 231.08a128 128 0 0 0-84 0L189.53 192H43.82l86.66 134.89a128 128 0 1 0 251 0ZM256 422a70 70 0 1 1 70-70a70.08 70.08 0 0 1-70 70"></svg:path><svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle>`,
})
export class IonMedalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
