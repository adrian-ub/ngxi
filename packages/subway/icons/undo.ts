import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUndoIcon],svg[subway-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M374.2 189.2H157.5L275.7 71.1H157.5L0 228.6l157.5 157.5h118.2L157.5 268h216.6c32.6 0 59.1 26.4 59.1 59.1c0 32.6-26.4 59.1-59.1 59.1V465c76.1 0 137.8-61.7 137.8-137.8c.1-76.3-61.6-138-137.7-138"></svg:path>`,
})
export class SubwayUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
