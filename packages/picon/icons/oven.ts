import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOvenIcon],svg[picon-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v8H0m1-1h6V2H1m1 1h4v1H2M1 1l1 1l1-1l-1-1m1 1l1 1l1-1l-1-1m1 1l1 1l1-1l-1-1"></svg:path>`,
})
export class PiconOvenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
