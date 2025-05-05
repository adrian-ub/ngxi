import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAndIcon],svg[picon-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6m1-3v2h2V3"></svg:path>`,
})
export class PiconAndIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
