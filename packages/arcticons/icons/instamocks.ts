import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstamocksIcon],svg[arcticons-instamocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.268 29.968S9.57 34.85 10.688 43.5h6.488"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.824 43.5s3.729-15.958 3.729-19.164S33.956 14.269 24 4.5c-9.956 9.769-10.553 16.63-10.553 19.836S17.176 43.5 17.176 43.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.732 29.968s4.698 4.882 3.58 13.532h-6.488"></svg:path><svg:circle cx="24" cy="38.869" r="2.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.196 9.853c1.336.864 2.995 1.363 4.804 1.363s3.468-.5 4.805-1.363"></svg:path>`,
})
export class ArcticonsInstamocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
