import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChartBarCircleFillIcon],svg[f7-chart-bar-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24M18 22a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V24a2 2 0 0 0-2-2zm9-6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2zm9 12a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></svg:path>`,
})
export class F7ChartBarCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
