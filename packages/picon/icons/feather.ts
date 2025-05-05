import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFeatherIcon],svg[picon-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l7-7l-7 6m1 0c1-9 13-7 2-1h1"></svg:path>`,
})
export class PiconFeatherIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
