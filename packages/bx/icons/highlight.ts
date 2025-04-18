import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHighlightIcon],svg[bx-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.707 5.826l-3.535-3.533a1 1 0 0 0-1.408-.006L7.096 10.82a1 1 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129l3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42m-9.369 7.833l-2.121-2.12l7.243-7.131l2.12 2.12zM4 20h16v2H4z"></svg:path>`,
})
export class BxHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
