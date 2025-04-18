import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePushIcon],svg[carbon-container-image-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM9 11l5 5l-5 5l-1.419-1.409L10.153 17H0v-2h10.206l-2.625-2.591z"></svg:path>`,
})
export class CarbonContainerImagePushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
