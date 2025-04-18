import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBatteryEmptyFillIcon],svg[mage-battery-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.89 8.67v6.65a3.56 3.56 0 0 1-3.55 3.56H5.56A3.57 3.57 0 0 1 2 15.32V8.67a3.56 3.56 0 0 1 3.56-3.55h8.78a3.55 3.55 0 0 1 3.55 3.55m2.34 7.17h-.54a.75.75 0 1 1 0-1.5h.54a.27.27 0 0 0 .19-.08a.32.32 0 0 0 .08-.2V9.95a.3.3 0 0 0-.08-.2a.27.27 0 0 0-.19-.08h-.54a.75.75 0 1 1 0-1.5h.54A1.78 1.78 0 0 1 22 9.95v4.16a1.77 1.77 0 0 1-.52 1.26a1.8 1.8 0 0 1-1.25.47"></svg:path>`,
})
export class MageBatteryEmptyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
