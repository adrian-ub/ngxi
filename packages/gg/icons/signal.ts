import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSignalIcon],svg[gg-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zm-8 8a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm5-5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class GgSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
