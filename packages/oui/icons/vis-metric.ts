import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisMetricIcon],svg[oui-vis-metric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.532 7.34a2.161 2.161 0 1 1 2.936 0a2.746 2.746 0 1 1-2.936 0M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm6 5.915a1.161 1.161 0 1 0 0-2.322a1.161 1.161 0 0 0 0 2.322m0 4.492a1.746 1.746 0 1 0 0-3.492a1.746 1.746 0 0 0 0 3.492"></svg:path>`,
})
export class OuiVisMetricIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
