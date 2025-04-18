import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsColorSwatch16Icon],svg[qlementine-icons-color-swatch-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3.05l2.16-2.16a.994.994 0 0 1 1.41 0l3.54 3.54a.996.996 0 0 1 0 1.41L11.95 9H15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3.5C1.57 16 0 14.43 0 12.5zm1 0h5v11.5a2.5 2.5 0 0 1-5 0zm5.01 13.9l4.94-4.94H15v5H5.95l.061-.062zm.989-2.4l6.4-6.4l-3.54-3.54l-2.86 2.86v7.075z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsColorSwatch16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
