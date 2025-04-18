import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoIcon],svg[gravity-ui-geo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987l4.68 2.978zM3 5.707V11.5c0 .648.411 1.2.987 1.41l2.978-4.68zM5.707 13H11.5a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.987-1.41l-3.38 5.313zM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
