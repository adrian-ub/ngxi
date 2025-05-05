import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBedbunkIcon],svg[picon-bedbunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6L1 5l1-1l1 1M0 8V0h1v2h2V0h5v8L7 7H1m1-7l1 1l-1 1l-1-1m0 5h2V4h4V3H1"></svg:path>`,
})
export class PiconBedbunkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
