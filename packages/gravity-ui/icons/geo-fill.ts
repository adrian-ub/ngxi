import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoFillIcon],svg[gravity-ui-geo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.247 1.5H4.5a3 3 0 0 0-2.69 1.672l5.96 3.793zM1.5 4.753V11.5a3 3 0 0 0 1.672 2.69l3.793-5.96zM4.753 14.5H11.5a3 3 0 0 0 3-3v-7a3 3 0 0 0-1.671-2.69L8.633 8.402z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
