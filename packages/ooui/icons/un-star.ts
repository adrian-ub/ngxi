import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUnStarIcon],svg[ooui-un-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-7L10 .5L7 7H0l5.46 5.47l-1.64 7l6.18-3.7l6.18 3.73l-1.63-7z"></svg:path>`,
})
export class OouiUnStarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
