import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsClipboardIcon],svg[duo-icons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 2a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2zm1 8H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3 4H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
