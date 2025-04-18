import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsDroneIcon],svg[eos-icons-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 8V7h-7v1h3v1h-1v2h-3.3l-1.501-2.6H9.855l-1.5 2.6H5V9H4V8h3V7H0v1h3v1H2v5h3v-1h3.167l.216.374A8 8 0 0 0 4 20.5a.5.5 0 0 0 1 0a7 7 0 0 1 3.883-6.259l.972 1.683h4.344l.96-1.663A7 7 0 0 1 19 20.5a.5.5 0 0 0 1 0a8 8 0 0 0-4.34-7.106l.227-.394H19v1h3V9h-1V8Z"></svg:path>`,
})
export class EosIconsDroneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
