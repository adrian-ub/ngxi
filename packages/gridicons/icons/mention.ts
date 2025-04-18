import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsMentionIcon],svg[gridicons-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0 0 20v-2a8 8 0 1 1 8-8v.5a1.5 1.5 0 0 1-3 0V7h-2v1a5 5 0 1 0 1 7a3.5 3.5 0 0 0 6-2.46V12A10 10 0 0 0 12 2m0 13a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class GridiconsMentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
