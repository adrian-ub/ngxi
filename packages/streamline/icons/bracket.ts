import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBracketIcon],svg[streamline-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 10.5L.5 7L4 3.5m6 7L13.5 7L10 3.5"></svg:path>`,
})
export class StreamlineBracketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
