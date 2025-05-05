import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmazonIcon],svg[picon-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v1h2m0-3H2V0h4v5H2V2h3m1 3q4 1 0 3l1-2M0 6q3 2 6 0q-2 4-6 1"></svg:path>`,
})
export class PiconAmazonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
