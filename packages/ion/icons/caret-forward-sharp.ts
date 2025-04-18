import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCaretForwardSharpIcon],svg[ion-caret-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m144 448l224-192L144 64z"></svg:path>`,
})
export class IonCaretForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
