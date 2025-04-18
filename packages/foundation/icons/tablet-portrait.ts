import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationTabletPortraitIcon],svg[foundation-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M77.919 7.434c-.043 0-.084.011-.127.013v-.013H21.954v.013a3.03 3.03 0 0 0-2.908 3.022v79.062a3.03 3.03 0 0 0 2.908 3.022v.013h55.838v-.013c.043.002.083.013.127.013a3.035 3.035 0 0 0 3.035-3.035V10.469a3.035 3.035 0 0 0-3.035-3.035M49.873 90.072a2.485 2.485 0 1 1 .001-4.97a2.485 2.485 0 0 1-.001 4.97m21.124-7.463H29.003V17.391h41.995z"></svg:path>`,
})
export class FoundationTabletPortraitIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
