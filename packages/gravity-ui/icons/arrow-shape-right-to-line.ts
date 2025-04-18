import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeRightToLineIcon],svg[gravity-ui-arrow-shape-right-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9.5v2.471l4.276-3.499a.61.61 0 0 0 0-.944L6 4.029V6.5H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25zm7.5-1.498v6.248a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0zm-1.5 0a2.11 2.11 0 0 1-.774 1.631l-4.319 3.534a1.474 1.474 0 0 1-2.407-1.14V11H2.75A1.75 1.75 0 0 1 1 9.25v-2.5C1 5.784 1.784 5 2.75 5H4.5V3.974a1.474 1.474 0 0 1 2.407-1.14l4.319 3.533c.49.4.774 1 .774 1.632V8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeRightToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
