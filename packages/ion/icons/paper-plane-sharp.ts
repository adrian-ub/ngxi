import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneSharpIcon],svg[ion-paper-plane-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 16L15.88 208L195 289L448 64L223 317l81 179z"></svg:path>`,
})
export class IonPaperPlaneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
