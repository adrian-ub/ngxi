import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconListSelectionIcon],svg[codicon-list-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12v-1h9v1zm0-5h14v1H1zm11-4v1H1V3z"></svg:path>`,
})
export class CodiconListSelectionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
