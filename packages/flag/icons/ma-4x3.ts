import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMa4x3Icon],svg[flag-ma-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c1272d" d="M640 0H0v480h640z"></svg:path><svg:path fill="none" stroke="#006233" stroke-width="11.7" d="M320 179.4L284.4 289l93.2-67.6H262.4l93.2 67.6z"></svg:path>`,
})
export class FlagMa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
