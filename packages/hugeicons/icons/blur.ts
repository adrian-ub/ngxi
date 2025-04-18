import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlurIcon],svg[hugeicons-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.593 2.21a.97.97 0 0 0-1.205 0C9.51 3.66 3.97 8.39 4 13.9c0 4.46 3.585 8.1 8 8.1s8-3.63 8-8.09c.01-5.43-5.54-10.24-7.407-11.7M12 2v20m0-3l8-4m-8-.82l7-3.68m-7-1.139L16.573 7" color="currentColor"></svg:path>`,
})
export class HugeiconsBlurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
