import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStackedIcon],svg[picon-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V6h8v2M0 5V3h8v2M0 2V0h8v2"></svg:path>`,
})
export class PiconStackedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
