import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGoogleIcon],svg[picon-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 1.75C4 0 1 1.5 1 4c0 4 6 4 6 0h1c0 5.5-8 5.5-8 0c0-4 5-5 7-3M4 4h3v1H4"></svg:path>`,
})
export class PiconGoogleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
