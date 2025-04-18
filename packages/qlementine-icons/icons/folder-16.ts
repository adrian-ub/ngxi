import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFolder16Icon],svg[qlementine-icons-folder-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H7.5L6.3 1.4a1 1 0 0 0-.8-.4H2A2 2 0 0 0 .004 2.996v10A2 2 0 0 0 2 14.992h12c.53 0 1.04-.211 1.41-.586s.586-.884.586-1.41v-8A2 2 0 0 0 14 3m-7.3.6a1 1 0 0 0 .8.4H14a.997.997 0 0 1 1 1v8a.997.997 0 0 1-1 1H2a.997.997 0 0 1-1-1V3a.997.997 0 0 1 1-1h3.5z"></svg:path>`,
})
export class QlementineIconsFolder16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
