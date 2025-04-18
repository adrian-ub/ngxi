import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconMagentoIcon],svg[devicon-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f26322" d="M119.82 31.97v64.01l-15.85 9.12V41.17l-39.62-22.9l-39.64 22.9l.1 63.96l-15.82-9.15V32.02L64.45 0zM72.3 105.1l-7.9 4.6l-7.95-4.55V41.17l-15.82 9.15l.03 63.96L64.38 128l23.77-13.72V50.29L72.3 41.14z"></svg:path>`,
})
export class DeviconMagentoIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
