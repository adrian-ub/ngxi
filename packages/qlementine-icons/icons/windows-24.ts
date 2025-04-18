import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWindows24Icon],svg[qlementine-icons-windows-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2.568L23 1v10H11.5zm-2 .272L1 4v7h8.5zM1 13v7l8.5 1.16V13zm10.5 8.4L23 22.97v-10H11.5z"></svg:path>`,
})
export class QlementineIconsWindows24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
