import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBlameIcon],svg[picon-blame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h1v3M1 8V6h1v2m1-5v3H0V3m6-3v4h2V0M6 6v2h2V6M1 4v1h1V4"></svg:path>`,
})
export class PiconBlameIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
