import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlickdealsIcon],svg[arcticons-slickdeals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 33.184c.548 1.258 1.476 1.727 2.909 1.727h1.983c1.845 0 3.724-1.764 4.198-3.94h0c.473-2.175-.64-3.939-2.486-3.939h-2.19c-1.846 0-2.958-1.763-2.485-3.939h0c.473-2.175 2.352-3.939 4.198-3.939h1.983c1.433 0 2.36.47 2.909 1.727m-7.65 15.993l4.282-19.696m14.108 18.049L37.5 11.126m-3.079 14.16c.724-3.327-1.07-6.025-4.009-6.025h0c-2.937 0-5.906 2.698-6.63 6.025l-.85 3.917c-.724 3.327 1.07 6.024 4.009 6.024h0c2.938 0 5.905-2.697 6.629-6.024"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsSlickdealsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
