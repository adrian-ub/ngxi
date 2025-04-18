import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextSnippetIcon],svg[ri-text-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z"></svg:path>`,
})
export class RiTextSnippetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
