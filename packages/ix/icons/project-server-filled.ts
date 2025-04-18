import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProjectServerFilledIcon],svg[ix-project-server-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333h320v64h-85.334v192H224V384h32v42.667H149.333V384h32v-42.667H42.667zM256 170.266l-74.667-43.119l-74.666 43.119v86.236l74.666 43.12L256 256.502zm-128 73.921v-50.228l42.667 24.625v50.243zm64 24.64v-50.243l42.667-24.625v50.228zm-10.667-117.045l41.855 24.17l-41.855 24.156l-41.854-24.156zm288 296.218V170.667H298.667V448zm-128-234.667h85.334V256h-85.334zm0 64v128h85.334v-128zm21.334 85.334h42.666V320h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectServerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
