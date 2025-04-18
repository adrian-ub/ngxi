import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDashIcon],svg[codicon-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h6v1H5z"></svg:path>`,
})
export class CodiconDashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
