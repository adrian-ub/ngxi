import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEnterIcon],svg[picon-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4H3v1M0 8V7h1V0h6v7h1v1H6V1H5v7"></svg:path>`,
})
export class PiconEnterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
