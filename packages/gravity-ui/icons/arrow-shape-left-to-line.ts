import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeLeftToLineIcon],svg[gravity-ui-arrow-shape-left-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.5V4.029L5.724 7.528a.61.61 0 0 0 0 .944L10 11.971V9.5h3.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM2.5 7.998V1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm1.5 0c0-.632.284-1.23.774-1.631l4.319-3.534a1.474 1.474 0 0 1 2.407 1.14V5h1.75c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 11H11.5v1.026a1.474 1.474 0 0 1-2.407 1.14L4.774 9.634c-.49-.4-.774-1-.774-1.632V8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeLeftToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
