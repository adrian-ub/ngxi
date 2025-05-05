import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHighlighterIcon],svg[picon-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7L2 5l1-2l3 3M3 7L2 8H0l2-2m4.5-.5l-3-3L6 0h2v4"></svg:path>`,
})
export class PiconHighlighterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
