import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexHtmlIcon],svg[codex-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.695 5a2 2 0 0 1 1.98 2.282l-1.249 8.784a2 2 0 0 1-1.365 1.621l-3.446 1.114a2 2 0 0 1-1.23 0l-3.446-1.114a2 2 0 0 1-1.365-1.621l-1.25-8.784A2 2 0 0 1 7.305 5z"></svg:path><svg:path d="M15 8.4H9l.429 3.394h5.142l-.214 1.485l-.214 1.485L12 15.4l-2.143-.636l-.086-.425"></svg:path></svg:g>`,
})
export class CodexHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
