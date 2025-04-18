import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiMinusShapeFillIcon],svg[gravity-ui-minus-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 11h11A1.5 1.5 0 0 0 15 9.5v-3A1.5 1.5 0 0 0 13.5 5h-11A1.5 1.5 0 0 0 1 6.5v3A1.5 1.5 0 0 0 2.5 11"></svg:path>`,
})
export class GravityUiMinusShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
