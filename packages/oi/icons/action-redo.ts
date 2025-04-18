import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiActionRedoIcon],svg[oi-action-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1C1.57 1 0 2.57 0 4.5a2.5 2.5 0 0 1 5 0V5H4l2 2l2-2H7v-.5C7 2.57 5.43 1 3.5 1"></svg:path>`,
})
export class OiActionRedoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
