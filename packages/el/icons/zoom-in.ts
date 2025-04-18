import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elZoomInIcon],svg[el-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M614.166 307.121H460.605v153.561H307.044v153.562h153.561v153.56h153.561v-153.56h153.561V460.682H614.166zM1200 1066.325L978.182 844.507c60.81-87.069 96.743-192.795 96.743-307.045C1074.925 240.63 834.219 0 537.463 0S0 240.63 0 537.462c0 296.833 240.629 537.463 537.463 537.463c114.249 0 220.052-35.933 307.121-96.743L1066.402 1200zM537.386 921.441c-211.991 0-383.902-171.836-383.902-383.902c0-212.067 171.911-383.902 383.902-383.902c212.067 0 383.901 171.835 383.901 383.902c.077 212.066-171.757 383.902-383.901 383.902"></svg:path>`,
})
export class ElZoomInIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
