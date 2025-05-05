import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHockeyIcon],svg[picon-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v1h2V7M7 1L4 8H0V6h3l3-6"></svg:path>`,
})
export class PiconHockeyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
