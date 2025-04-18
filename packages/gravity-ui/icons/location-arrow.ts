import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLocationArrowIcon],svg[gravity-ui-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.16 13.134L6.5 9.5l-3.634-.66a2.272 2.272 0 0 1-.355-4.377l9.358-3.327a2.346 2.346 0 0 1 2.996 2.995l-3.328 9.358a2.272 2.272 0 0 1-4.376-.355m2.964-.148L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.014 5.876a.772.772 0 0 0 .12 1.487l3.634.661l1.022.186l.186 1.022l.66 3.634a.772.772 0 0 0 1.488.12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLocationArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
