import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCodeSharpIcon],svg[ion-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.98 397.63L0 256l161.98-141.63l27.65 31.61L64 256l125.63 110.02zm188.04 0l-27.65-31.61L448 256L322.37 145.98l27.65-31.61L512 256z"></svg:path>`,
})
export class IonCodeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
