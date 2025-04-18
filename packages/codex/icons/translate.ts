import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexTranslateIcon],svg[codex-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M7 17c1-2.5 5-5 6-8"></svg:path><svg:path d="M8.5 11s1.5 3 4 4M6 7.7h10m-5 0v-2M14.5 18l.714-2m0 0l1.702-4.765a.355.355 0 0 1 .668 0L19.286 16m-4.072 0h4.072M20 18l-.714-2"></svg:path></svg:g>`,
})
export class CodexTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
