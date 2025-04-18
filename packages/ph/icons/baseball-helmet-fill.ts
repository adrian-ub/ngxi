import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetFillIcon],svg[ph-baseball-helmet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 120h-24.3A104 104 0 0 0 16 128v24a72.08 72.08 0 0 0 72 72h40a72.08 72.08 0 0 0 72-72v-16h48a8 8 0 0 0 0-16M88 180a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-28a56.06 56.06 0 0 1-50.46 55.72A71.87 71.87 0 0 0 160 152v-16h24Z"></svg:path>`,
})
export class PhBaseballHelmetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
