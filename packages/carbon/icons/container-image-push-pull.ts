import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePushPullIcon],svg[carbon-container-image-push-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM9 5l5 5l-5 5l-1.419-1.409L10.153 11H0V9h10.206L7.581 6.409zM5 27l-5-5l5-5l1.419 1.409L3.847 21H14v2H3.794l2.625 2.591z"></svg:path>`,
})
export class CarbonContainerImagePushPullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
