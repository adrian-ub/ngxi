import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFormatBold16Icon],svg[qlementine-icons-format-bold-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 1 1-1h5a3.999 3.999 0 0 1 3.063 6.57c1.16.7 1.94 1.97 1.94 3.43c0 2.21-1.79 4-4 4h-6a1 1 0 0 1-1-1V2zm2 10.5a.5.5 0 0 0 .5.5H10c1.1 0 2-.895 2-2c0-1.1-.895-2-2-2H5.5a.5.5 0 0 0-.5.5zm0-6a.5.5 0 0 0 .5.5H9a2 2 0 1 0 0-4H5.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsFormatBold16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
