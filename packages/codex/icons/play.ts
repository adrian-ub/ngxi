import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexPlayIcon],svg[codex-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 10.56v2.88a1.3 1.3 0 0 0 2.021 1.081l2.16-1.44a1.3 1.3 0 0 0-.001-2.163L12.021 9.48A1.3 1.3 0 0 0 10 10.561Z"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
