import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRainbowIcon],svg[tdesign-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a9 9 0 0 0-9 9v1H1v-1C1 10.925 5.925 6 12 6s11 4.925 11 11v1h-2v-1a9 9 0 0 0-9-9m0 3a6 6 0 0 0-6 6v1H4v-1a8 8 0 1 1 16 0v1h-2v-1a6 6 0 0 0-6-6m0 3a3 3 0 0 0-3 3v1H7v-1a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-3-3"></svg:path>`,
})
export class TdesignRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
