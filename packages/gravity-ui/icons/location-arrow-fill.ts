import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLocationArrowFillIcon],svg[gravity-ui-location-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.924 13.894l3.95-10.316a1.9 1.9 0 0 0-2.452-2.452L2.106 5.076a1.722 1.722 0 0 0 .163 3.27L6.5 9.5l1.154 4.231a1.722 1.722 0 0 0 3.27.163"></svg:path>`,
})
export class GravityUiLocationArrowFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
