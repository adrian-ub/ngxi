import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleUpFilledOffIcon],svg[pepicons-pencil-triangle-up-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.134 4.501a1 1 0 0 1 1.732 0l5.769 10A1 1 0 0 1 15.769 16H4.23a1 1 0 0 1-.866-1.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.635 14.5a1 1 0 0 1-.866 1.5H4.23a1 1 0 0 1-.866-1.5l5.769-9.999a1 1 0 0 1 1.732 0zM10 9.003L7.694 13h4.612z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilTriangleUpFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
