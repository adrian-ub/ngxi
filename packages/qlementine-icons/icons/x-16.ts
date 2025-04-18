import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsX16Icon],svg[qlementine-icons-x-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.48 7.27L15 15h-4L7.27 9.78L2.67 15H1.01l5.52-6.27L1.01 1h4l3.73 5.22L13.34 1H15zM2.95 2l8.57 12h1.54L4.49 2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsX16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
