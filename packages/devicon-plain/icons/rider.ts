import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainRiderIcon],svg[devicon-plain-rider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.473 5.34L5.486 28.904l13.006 80.371l33.549 12.899l14.033-11.399L88.1 122.367l34.414-20.101l-13.012-27.81l13.012-23.585l-21.442-11.9v62.101H26.93V26.93h60.654L79.506 7.18L66.629 19.857zM27.93 27.93v72.142h72.142V27.93zm8.64 8.545h12.557a10.97 10.97 0 0 1 8.01 2.79a8.63 8.63 0 0 1 2.365 6.292v.072a8.53 8.53 0 0 1-5.9 8.533l6.728 9.826h-7.084l-5.887-8.802h-4.691v8.802h-6.096zm27.953 0h10.729c8.643 0 14.629 5.936 14.629 13.677v.084c0 7.741-5.973 13.752-14.629 13.752H64.523zM75.3 41.924l-4.682.012v16.578H75.3a7.84 7.84 0 0 0 8.29-8.215v-.074a7.91 7.91 0 0 0-8.29-8.301m-32.631.06v7.899l6.094.002c2.95 0 4.644-1.575 4.644-3.89v-.073c0-2.597-1.804-3.938-4.754-3.938zm-6.121 44.762h27.43v4.572h-27.43z"></svg:path>`,
})
export class DeviconPlainRiderIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
