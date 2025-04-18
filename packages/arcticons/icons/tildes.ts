import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTildesIcon],svg[arcticons-tildes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.056 21.722H3.5v4.556h4.556zm4.555-4.555H8.056v4.555h4.555zm4.556-4.556H12.61v4.556h4.556zm4.555 4.556h-4.555v4.555h4.555zm4.556 4.555h-4.556v4.556h4.556zm4.555 4.556h-4.555v4.555h4.555zm4.556 4.555h-4.556v4.556h4.556zm4.555-4.555H35.39v4.555h4.555zm4.556-4.556h-4.556v4.556H44.5z"></svg:path>`,
})
export class ArcticonsTildesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
