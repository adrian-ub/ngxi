import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetbenefitsIcon],svg[arcticons-netbenefits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.358 40.001l3.647-20.681M19.392 45.004l4.529-25.684l11.218 23.073m-13.34-20.952l-3.843 3.843m2.965-5.964h-5.435m6.313-2.122l-3.843-3.843m5.965 2.965v-5.435m2.121 6.313l3.843-3.843"></svg:path>`,
})
export class ArcticonsNetbenefitsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
