import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleSharpIcon],svg[ion-play-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88Z"></svg:path>`,
})
export class IonPlayForwardCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
