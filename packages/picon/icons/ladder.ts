import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLadderIcon],svg[picon-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V7H2v1m4-4V3H2v1m4 2V5H2v1m4-4V0H2v2M1 8V0h6v8"></svg:path>`,
})
export class PiconLadderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
