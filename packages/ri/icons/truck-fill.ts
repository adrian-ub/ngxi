import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTruckFillIcon],svg[ri-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2v3h4v-.285L18.992 10z"></svg:path>`,
})
export class RiTruckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
