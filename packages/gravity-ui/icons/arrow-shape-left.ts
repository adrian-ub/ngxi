import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeLeftIcon],svg[gravity-ui-arrow-shape-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 6V3.33a.33.33 0 0 0-.543-.252L2.732 7.499a.656.656 0 0 0 0 1.002l5.225 4.421a.33.33 0 0 0 .543-.252V10H13a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 13 6zM13 4.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v1.17a1.83 1.83 0 0 1-3.012 1.397L1.763 9.646a2.156 2.156 0 0 1 0-3.292l5.225-4.421A1.83 1.83 0 0 1 10 3.33V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
