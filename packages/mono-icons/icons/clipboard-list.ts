import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsClipboardListIcon],svg[mono-icons-clipboard-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-1a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm-2-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1zm7 3h2v15H6V5h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-6 0V4h4v1z"></svg:path></svg:g>`,
})
export class MonoIconsClipboardListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
