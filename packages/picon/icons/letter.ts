import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLetterIcon],svg[picon-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 4V2h4v2m2-1L4 1L0 3v4h8"></svg:path>`,
})
export class PiconLetterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
