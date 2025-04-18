import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSkipForward16Icon],svg[qlementine-icons-skip-forward-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0zm-7.32-.43C3.041 1.973 2 2.427 2 3.301v9.4c0 .874 1.04 1.33 1.68.731l5.03-4.7a.997.997 0 0 0 0-1.46l-5.03-4.7z"></svg:path>`,
})
export class QlementineIconsSkipForward16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
