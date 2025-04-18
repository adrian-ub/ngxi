import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTreeAltFIcon],svg[jam-tree-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14.858H1.674a1 1 0 0 1-.88-1.474l1.9-3.529a1 1 0 0 1-.785-1.512l4.234-7.056a1 1 0 0 1 1.714 0l4.234 7.056a1 1 0 0 1-.785 1.512l1.9 3.529a1 1 0 0 1-.88 1.474H8v6H6z"></svg:path>`,
})
export class JamTreeAltFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
