import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadphones32FilledIcon],svg[fluent-headphones-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 4C9.149 4 4 9.149 4 15.5V18h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6.5A4.5 4.5 0 0 1 2 25.5v-10C2 8.044 8.044 2 15.5 2S29 8.044 29 15.5v10a4.5 4.5 0 0 1-4.5 4.5H20a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h7v-2.5C27 9.149 21.851 4 15.5 4"></svg:path>`,
})
export class FluentHeadphones32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
