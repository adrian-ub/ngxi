import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStereo16Icon],svg[qlementine-icons-stereo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12a5.002 5.002 0 0 1-8-4a5.002 5.002 0 0 1 8-4a5.002 5.002 0 0 1 8 4a5.002 5.002 0 0 1-8 4m-.75-.693A3.999 3.999 0 0 1 1 7.999a3.999 3.999 0 0 1 6.25-3.308C6.472 5.572 6 6.731 6 8.001s.472 2.43 1.25 3.31zm1.5-6.62A3.999 3.999 0 0 1 15 7.995a3.999 3.999 0 0 1-6.25 3.308c.778-.881 1.25-2.04 1.25-3.31s-.472-2.43-1.25-3.31zM8 5.349c.622.705 1 1.63 1 2.65s-.378 1.94-1 2.65c-.622-.705-1-1.63-1-2.65s.378-1.94 1-2.65" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsStereo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
