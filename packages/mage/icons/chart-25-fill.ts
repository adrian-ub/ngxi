import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChart25FillIcon],svg[mage-chart-25-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 9.5v-8a8.74 8.74 0 0 1 8 8z"></svg:path>`,
})
export class MageChart25FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
