import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBongIcon],svg[bxs-bong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.293 8.293l-2.069 2.069A7 7 0 0 0 15 8.681V4h1V2H8v2h1v4.681A7.01 7.01 0 0 0 5 15c0 3.859 3.141 7 7 7s7-3.141 7-7a7 7 0 0 0-.652-2.934l2.359-2.359zm-8.959 1.998l.666-.235V4h2v6.056l.666.235A5 5 0 0 1 16.886 14H7.114a5 5 0 0 1 3.22-3.709"></svg:path>`,
})
export class BxsBongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
