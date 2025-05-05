import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFistIcon],svg[picon-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6c-3-1-3-5 2-4l1 1H2v1h5L6 6v2m0-5V0l1 1v2M2 1V0h1v1m1 0V0h1v2M0 1V0h1v1"></svg:path>`,
})
export class PiconFistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
