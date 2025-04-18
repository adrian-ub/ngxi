import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScript32FilledIcon],svg[fluent-script-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.998 2a4.2 4.2 0 0 1 1 .14a3.97 3.97 0 0 0-2.96 3.46c-.018.185-.029.254-.034.29L24 5.921V27c0 1.656-1.346 3-3 3s-3-1.346-3-3v-3a2 2 0 0 0-2-2H6V7a5 5 0 0 1 5-5zM16 24v3c0 1.13.392 2.162 1.026 3h-.47c-2.51 0-3.066-.002-4.728 0H11.1c-2.652.004-4.14.012-5 0H6c-2.21 0-4-1.79-4-4v-1a1 1 0 0 1 1-1zM28 4c-.36 0-.7.1-1 .28c-.6.34-1 .98-1 1.72v4h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2"></svg:path>`,
})
export class FluentScript32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
