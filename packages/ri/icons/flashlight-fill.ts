import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlashlightFillIcon],svg[ri-flashlight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h7l-9 13v-9H4l9-13z"></svg:path>`,
})
export class RiFlashlightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
