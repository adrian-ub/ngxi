import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLatexIcon],svg[picon-latex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H4l1.5-3L4 2h1l1 2l1-2h1L6.5 5L8 8H7L6 6M2 5V1H0V0h5v1H3v4m0 1v1H0V2h1v4"></svg:path>`,
})
export class PiconLatexIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
