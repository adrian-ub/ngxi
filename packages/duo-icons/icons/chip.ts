import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsChipIcon],svg[duo-icons-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 1 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 1 1 2 0v1h4V3a1 1 0 0 1 1-1" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 8h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
