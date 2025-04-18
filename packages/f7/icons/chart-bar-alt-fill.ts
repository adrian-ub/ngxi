import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChartBarAltFillIcon],svg[f7-chart-bar-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25 12h6a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2M11 22h6a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2m28 11h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V35a2 2 0 0 1 2-2"></svg:path>`,
})
export class F7ChartBarAltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
