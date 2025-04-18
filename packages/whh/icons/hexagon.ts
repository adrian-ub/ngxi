import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHexagonIcon],svg[whh-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 897H256L0 449L256 0h512l256 449zM736 64H288L64 449l224 384h448l224-384z"></svg:path>`,
})
export class WhhHexagonIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
