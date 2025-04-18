import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwUpSquareOIcon],svg[uiw-up-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.818 1.364a.455.455 0 0 0-.454.454v16.364c0 .25.203.454.454.454h16.364a.455.455 0 0 0 .454-.454V1.818a.455.455 0 0 0-.454-.454zM18.182 0C19.186 0 20 .814 20 1.818v16.364A1.82 1.82 0 0 1 18.182 20H1.818A1.82 1.82 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0zM9.519 7.617l-3.895 3.87a.682.682 0 0 0 .962.968l3.419-3.398l3.49 3.402a.682.682 0 1 0 .952-.976l-3.971-3.87a.68.68 0 0 0-.957.004"></svg:path>`,
})
export class UiwUpSquareOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
