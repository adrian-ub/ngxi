import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconListUnorderedIcon],svg[codicon-list-unordered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3H1v1h1zm0 3H1v1h1zM1 9h1v1H1zm1 3H1v1h1zm2-9h11v1H4zm11 3H4v1h11zM4 9h11v1H4zm11 3H4v1h11z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconListUnorderedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
