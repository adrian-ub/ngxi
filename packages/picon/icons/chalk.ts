import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChalkIcon],svg[picon-chalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m1-1h3V5h2v1h1V2H1"></svg:path>`,
})
export class PiconChalkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
