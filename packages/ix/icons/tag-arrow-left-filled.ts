import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowLeftFilledIcon],svg[ix-tag-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l192 192H234.667v170.667zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m239.088 121.753l-30.17-30.17L268.5 384.001l100.418 100.418l30.17-30.17l-48.915-48.915h119.163v-42.666H350.173z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowLeftFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
