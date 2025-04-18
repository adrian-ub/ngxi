import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexUsersGroupIcon],svg[codex-users-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 10c.714 0 1.239-.434 1.54-.885c.304-.457.46-1.03.46-1.615c0-.584-.156-1.158-.46-1.615C11.238 5.435 10.714 5 10 5s-1.239.434-1.54.885C8.157 6.342 8 6.915 8 7.5c0 .584.156 1.158.46 1.615c.301.45.825.885 1.54.885Z"></svg:path><svg:ellipse cx="10" cy="16" rx="3" ry="5" transform="rotate(-90 10 16)"></svg:ellipse><svg:path stroke-linecap="round" d="M15.556 10.222a1.778 1.778 0 1 0 0-3.555M17.5 13c3.5 1.5 3 5 .5 5.5"></svg:path></svg:g>`,
})
export class CodexUsersGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
