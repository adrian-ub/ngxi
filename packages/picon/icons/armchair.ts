import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconArmchairIcon],svg[picon-armchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V4h1v4m6 0V4h1v4M1 3c-2-4 8-4 6 0H6v2H2V3m0 5V6h4v2"></svg:path>`,
})
export class PiconArmchairIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
