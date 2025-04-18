import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiStarIcon],svg[ooui-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-7L10 .5L7 7H0l5.46 5.47l-1.64 7l6.18-3.7l6.18 3.73l-1.63-7zm-10 6.9l-3.76 2.27l1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4l1 4.28z"></svg:path>`,
})
export class OouiStarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
