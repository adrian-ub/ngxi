import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChart15FillIcon],svg[mage-chart-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.37 4.82l-.22-.22a10.29 10.29 0 1 0 .25.25zm-6.61 5.3v-6.9a8.65 8.65 0 0 1 4.88 2z"></svg:path>`,
})
export class MageChart15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
