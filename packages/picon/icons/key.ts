import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKeyIcon],svg[picon-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2H1v1h1m2 1c-5 7-5-8 0-1h4v3L6 5V4"></svg:path>`,
})
export class PiconKeyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
