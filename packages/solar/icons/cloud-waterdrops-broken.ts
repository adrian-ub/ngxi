import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsBrokenIcon],svg[solar-cloud-waterdrops-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path><svg:path d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
