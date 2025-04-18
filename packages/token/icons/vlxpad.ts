import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVlxpadIcon],svg[token-vlxpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.735 5.999H3l5 8.5l3.75-6L10.5 6l-2.3 4.1z"></svg:path><svg:path fill="currentColor" d="M21 5.999H10.5l1.25 2.5h4.5l-.5 1H12l1 2.5h4z"></svg:path><svg:path fill="currentColor" d="m13 12l-1-2.5l-3.25 5.75Q9.456 16.59 10 18s1.906-3.9 3-6"></svg:path>`,
})
export class TokenVlxpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
