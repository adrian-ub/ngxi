import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFullscreenExit1Icon],svg[tdesign-fullscreen-exit-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20v-6h6v2h-4v4zm-6 0v-4H4v-2h6v6zm12-10h-6V4h2v4h4zm-10 0H4V8h4V4h2z"></svg:path>`,
})
export class TdesignFullscreenExit1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
