import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexStarIcon],svg[codex-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.82 6.044a.2.2 0 0 1 .36 0l1.798 3.741a.2.2 0 0 0 .153.112l4.114.553a.2.2 0 0 1 .111.343l-3.003 2.865a.2.2 0 0 0-.058.18l.745 4.084a.2.2 0 0 1-.292.212L12 16.112l-3.748 2.022a.2.2 0 0 1-.292-.212l.745-4.083a.2.2 0 0 0-.058-.18l-3.003-2.866a.2.2 0 0 1 .111-.343l4.114-.553a.2.2 0 0 0 .153-.112z"></svg:path>`,
})
export class CodexStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
