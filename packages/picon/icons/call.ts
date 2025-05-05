import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCallIcon],svg[picon-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h3v3H1l4 4V5h3v3H5Q1 7 0 3"></svg:path>`,
})
export class PiconCallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
