import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChart2FillIcon],svg[ri-bar-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h6v8H2zM9 3h6v18H9zm7 5h6v13h-6z"></svg:path>`,
})
export class RiBarChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
