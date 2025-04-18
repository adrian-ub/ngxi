import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizFillIcon],svg[si-more-muted-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"></svg:path>`,
})
export class SiMoreMutedHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
