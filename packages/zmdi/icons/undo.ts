import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiUndoIcon],svg[zmdi-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 107q73 0 131.5 43T437 261l-51 16q-17-51-61.5-84T224 160q-61 0-109 40l77 77H0V85l77 77q64-55 147-55"></svg:path>`,
})
export class ZmdiUndoIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
