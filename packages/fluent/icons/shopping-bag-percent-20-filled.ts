import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBagPercent20FilledIcon],svg[fluent-shopping-bag-percent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5V6H5a1 1 0 0 0-1 1v8q0 .625.235 1.172q.234.539.648.953A3 3 0 0 0 7 18h3.085a1.5 1.5 0 0 1 .354-1.56l.561-.561v-1.05a3.001 3.001 0 0 1 0-5.658V4.5a2.5 2.5 0 0 0-.328-1.242Q11.039 3 11.5 3q.312 0 .586.117a1.48 1.48 0 0 1 .797.797Q13 4.187 13 4.5V6h-1v3a3 3 0 0 1 2.998 2.881L16 10.879V7a1 1 0 0 0-1-1h-1V4.5q0-.516-.195-.969A2.48 2.48 0 0 0 11.5 2a2.44 2.44 0 0 0-1.492.508a2.5 2.5 0 0 0-.703-.375A2.4 2.4 0 0 0 8.5 2q-.516 0-.969.195q-.46.195-.797.539q-.344.336-.539.797Q6 3.984 6 4.5m4 0V6H7V4.5q0-.312.117-.586a1.48 1.48 0 0 1 .797-.797Q8.188 3 8.5 3t.586.117a1.48 1.48 0 0 1 .797.797Q10 4.187 10 4.5m2 9.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m.854-4.146a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentShoppingBagPercent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
