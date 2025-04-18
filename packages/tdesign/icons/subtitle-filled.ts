import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSubtitleFilledIcon],svg[tdesign-subtitle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM7 8h4v2H7v4h4v2H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m8 0h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class TdesignSubtitleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
