import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiEspnIcon],svg[cbi-espn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.96 10.43L4.91 19h12.46l.46-3.72h-7.8l.19-1.6h7.81l.4-3.25zM6.63 5l-.48 3.93h12.46L19.09 5z"></svg:path>`,
})
export class CbiEspnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
