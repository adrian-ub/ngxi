import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSendSharpIcon],svg[ion-send-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 464l480-208L16 48v160l320 48l-320 48Z"></svg:path>`,
})
export class IonSendSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
