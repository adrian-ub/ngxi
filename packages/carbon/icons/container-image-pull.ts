import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePullIcon],svg[carbon-container-image-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM5 11l-5 5l5 5l1.419-1.409L3.847 17H14v-2H3.794l2.625-2.591z"></svg:path>`,
})
export class CarbonContainerImagePullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
