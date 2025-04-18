import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsVIcon],svg[ls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 495l169-367h79L249 667L0 128h79z"></svg:path>`,
})
export class LsVIcon {
  readonly viewBox = input("0 0 497 667")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
