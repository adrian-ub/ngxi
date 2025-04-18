import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPictureIcon],svg[fontisto-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h32v24H0zm2 2v20h28V2zm2.012 18.054S6.092 6.008 9.181 6.008s4.442 9.908 6.926 9.908s2.298-3.871 4.116-3.871s8.08 8.01 8.08 8.01zM25 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class FontistoPictureIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
