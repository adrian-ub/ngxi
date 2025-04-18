import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAmktIcon],svg[token-amkt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.206 6.267C4.778 6.267 2 8.933 2 12.222c0 2.99 2.3 5.467 5.295 5.89l5.772-9.595a6.3 6.3 0 0 0-4.861-2.25m6.438-.378l-1.577 2.628l5.766 9.594H22z"></svg:path>`,
})
export class TokenAmktIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
