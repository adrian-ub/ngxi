import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenConvIcon],svg[token-conv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.71 7.36L15.025 12l4.68 4.65A8.95 8.95 0 0 0 21 12c0-1.7-.47-3.285-1.29-4.64"></svg:path><svg:path fill="currentColor" d="m18.41 5.683l-2.13 2.11a6 6 0 1 0 0 8.414l2.125 2.115a9 9 0 1 1 .005-12.64"></svg:path>`,
})
export class TokenConvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
