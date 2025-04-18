import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlayFilledIcon],svg[ix-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 256L128 405.334V106.667z"></svg:path>`,
})
export class IxPlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
