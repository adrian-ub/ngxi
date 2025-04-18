import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFullscreenExitIcon],svg[tdesign-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.414 5l-4.5 4.5H20v2h-7.5V4h2v4.086l4.5-4.5zM4 12.5h7.5V20h-2v-4.086l-4.5 4.5L3.586 19l4.5-4.5H4z"></svg:path>`,
})
export class TdesignFullscreenExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
