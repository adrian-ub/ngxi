import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiscardIcon],svg[codicon-discard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 2v3.5L4 6h3.5V5H4.979l.941-.941a3.552 3.552 0 1 1 5.023 5.023L5.746 14.28l.72.72l5.198-5.198A4.57 4.57 0 0 0 5.2 3.339l-.7.7V2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDiscardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
