import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFireEngineIcon],svg[twemoji-fire-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M35 8H13a1 1 0 0 0 0 2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2a1 1 0 1 0 0-2m1 5a1 1 0 0 1-1 1H13a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1"></svg:path><svg:path fill="#DD2E44" d="M32 14H14s.041-2-2.979-2H5.146C0 12 0 19.959 0 19.959V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#F5F8FA" d="M2 22h32v3H2z"></svg:path><svg:circle cx="7" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="7" cy="31" r="2" fill="#8899A6"></svg:circle><svg:circle cx="28" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="28" cy="31" r="2" fill="#8899A6"></svg:circle><svg:path fill="#55ACEE" d="M7 20H2s0-6 3-6h2zm5 0H9v-6h1c1 0 2 1 2 2z"></svg:path><svg:path fill="#FFAC33" d="M8 11a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1"></svg:path><svg:path fill="#3B88C3" d="M10 11a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiFireEngineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
