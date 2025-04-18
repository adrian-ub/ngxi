import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlashlightBoldIcon],svg[ph-flashlight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 12H72a20 20 0 0 0-20 20v45.33a20.12 20.12 0 0 0 4 12L76 116v108a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V116l20-26.67a20.12 20.12 0 0 0 4-12V32a20 20 0 0 0-20-20m-4 24v16H76V36Zm-20 66.67a20.12 20.12 0 0 0-4 12V220h-56V114.67a20.12 20.12 0 0 0-4-12L76 76h104ZM140 120v32a12 12 0 0 1-24 0v-32a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFlashlightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
