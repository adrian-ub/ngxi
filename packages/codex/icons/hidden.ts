import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexHiddenIcon],svg[codex-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.778 6L18.5 17.722M10.687 10A2.342 2.342 0 1 0 14 13.314"></svg:path><svg:path d="M13 7c4 4.167 7 4.17 7 4.67s-1 1.5-1 1.5M8.242 8.81q-.973.628-1.84 1.615c-.698.794-1.047 1.191-1.047 1.945s.35 1.151 1.047 1.945Q8.793 17.037 12 17.037q1.665 0 3.111-.735"></svg:path></svg:g>`,
})
export class CodexHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
