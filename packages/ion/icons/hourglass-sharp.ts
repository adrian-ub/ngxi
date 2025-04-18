import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionHourglassSharpIcon],svg[ion-hourglass-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112ZM272 224v112l91 96H148l92-96V224l-80-80h192Z"></svg:path>`,
})
export class IonHourglassSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
