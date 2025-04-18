import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadset32FilledIcon],svg[fluent-headset-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12C6 6.477 10.477 2 16 2s10 4.477 10 10v6a4 4 0 0 1-4 4h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4a8 8 0 1 0-16 0h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a4 4 0 0 0 4 4h1.17a3.001 3.001 0 1 1 0 2H12a6 6 0 0 1-6-6z"></svg:path>`,
})
export class FluentHeadset32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
