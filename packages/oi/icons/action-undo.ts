import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiActionUndoIcon],svg[oi-action-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 1C2.57 1 1 2.57 1 4.5V5H0l2 2l2-2H3v-.5a2.5 2.5 0 0 1 5 0C8 2.57 6.43 1 4.5 1"></svg:path>`,
})
export class OiActionUndoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
