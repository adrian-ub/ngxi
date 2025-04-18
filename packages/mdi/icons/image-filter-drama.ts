import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterDramaIcon],svg[mdi-image-filter-drama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20h12q1.88 0 3.19-1.31T23 15.5q0-1.7-1.21-3.1T19 11q0-2.95-2-4.97Q14.95 4 12 4Q9.88 4 8.29 5.08Q6.7 6.15 6.25 8q2.55.45 4.15 2.19T12 14.5h-2q0-1.82-1.34-3.16Q7.33 10 5.5 10t-3.16 1.34Q1 12.68 1 14.5q0 2.3 1.6 3.9T6.5 20"></svg:path>`,
})
export class MdiImageFilterDramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
