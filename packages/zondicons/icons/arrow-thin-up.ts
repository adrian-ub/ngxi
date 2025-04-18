import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowThinUpIcon],svg[zondicons-arrow-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3.828L2.929 9.899L1.515 8.485L10 0l.707.707l7.778 7.778l-1.414 1.414L11 3.828V20H9z"></svg:path>`,
})
export class ZondiconsArrowThinUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
