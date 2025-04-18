import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCaretBackSharpIcon],svg[ion-caret-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 64L144 256l224 192z"></svg:path>`,
})
export class IonCaretBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
