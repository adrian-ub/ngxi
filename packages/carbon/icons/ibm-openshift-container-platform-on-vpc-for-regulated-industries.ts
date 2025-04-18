import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmOpenshiftContainerPlatformOnVpcForRegulatedIndustriesIcon],svg[carbon-ibm-openshift-container-platform-on-vpc-for-regulated-industries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="27" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29 31H16c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h13c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2m-13-6v4h13v-4zm13-4H16c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h13c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2m-13-6v4h13v-4z"></svg:path><svg:path fill="currentColor" d="M12 27.3C7.347 25.648 4 21.213 4 16C4 9.383 9.383 4 16 4c4.831 0 8.994 2.876 10.895 7h2.166C27.042 5.746 21.957 2 16 2C8.28 2 2 8.28 2 16c0 6.33 4.225 11.685 10 13.41z"></svg:path>`,
})
export class CarbonIbmOpenshiftContainerPlatformOnVpcForRegulatedIndustriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
