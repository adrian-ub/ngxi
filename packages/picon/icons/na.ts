import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNaIcon],svg[picon-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V5h2v1M4 7l2-6l2 6H7L6 3L5 7M0 7V1h1l2 4V1h1v6H3L1 3v4"></svg:path>`,
})
export class PiconNaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
