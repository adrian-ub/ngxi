import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconListFilterIcon],svg[codicon-list-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12v-1h4v1zM4 7h8v1H4zm10-4v1H2V3z"></svg:path>`,
})
export class CodiconListFilterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
