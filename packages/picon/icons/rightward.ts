import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRightwardIcon],svg[picon-rightward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H0v4h4v2l4-4l-4-4"></svg:path>`,
})
export class PiconRightwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
