import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsIdCardIcon],svg[duo-icons-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 9v2H8V9zm7 2h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993z" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" d="M10 7H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zm7 8H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
