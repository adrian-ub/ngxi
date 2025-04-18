import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLayersExternalIcon],svg[carbon-layers-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a1 1 0 0 1-.474-.12l-13-7l.948-1.76L16 21.864l12.526-6.744l.948 1.76l-13 7A1 1 0 0 1 16 24"></svg:path><svg:path fill="currentColor" d="M16 30a1 1 0 0 1-.474-.12l-13-7l.948-1.76L16 27.864l12.526-6.744l.948 1.76l-13 7A1 1 0 0 1 16 30M29.474 9.12L16 1.864v2.272L26.89 10L16 15.864v2.272l13.474-7.255a1 1 0 0 0 0-1.761m-25.06.294L8 5.828V14h2V5.828l3.586 3.586L15 8L9 2L3 8z"></svg:path>`,
})
export class CarbonLayersExternalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
