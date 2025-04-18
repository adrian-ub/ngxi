import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGhostIcon],svg[gg-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h12v4H3zm18 4h-4V4h4zM3 10h18v4H3zm8 6H3v4h8zm2 0v4h8v-4z"></svg:path>`,
})
export class GgGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
