import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdRewindIcon],svg[ion-md-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z" fill="currentColor"></svg:path>`,
})
export class IonMdRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
