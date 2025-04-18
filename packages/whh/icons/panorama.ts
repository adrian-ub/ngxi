import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPanoramaIcon],svg[whh-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M994.69 766q-130-63-239-94t-243-31t-244 31t-238 94q-12 6-21 1t-9-19V21q0-13 9-18.5t21 1.5q128 62 238 93.5t244 31.5t243-31t239-94q12-7 21-1.5t9 18.5v727q0 14-9 19t-21-1m-482-573q-109 0-230-23.5T64.69 97v576q51-26 114-46l160-161q18-18 46.5-18t46.5 18l97 98l162-162q18-18 46.5-18t46.5 18l177 178V97q-98 50-218 73t-230 23m-288 256q-40 0-68-28.5t-28-68t28-67.5t68-28t68 28t28 67.5t-28 68t-68 28.5"></svg:path>`,
})
export class WhhPanoramaIcon {
  readonly viewBox = input("0 0 1025 770")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
