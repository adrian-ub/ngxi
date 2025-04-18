import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle516RegularIcon],svg[fluent-number-circle-5-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.25 5H7.444l-.125.996h.094c.324 0 .745.003.906.026a2.25 2.25 0 1 1-2.248 3.377a.5.5 0 1 1 .86-.511a1.25 1.25 0 0 0 2.313-.464c.098-.7-.442-1.384-1.15-1.418L7.905 8a37 37 0 0 0-1.147 0a.502.502 0 0 1-.503-.562l.25-2A.5.5 0 0 1 7.001 5h2.25a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentNumberCircle516RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
