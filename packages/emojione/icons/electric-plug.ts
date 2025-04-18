import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneElectricPlugIcon],svg[emojione-electric-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M11.7 13.1c0 .6-.5 1.1-1.2 1.1H9c-.7 0-1.2-.5-1.2-1.1v-12C7.8.5 8.3 0 9 0h1.6c.7 0 1.2.5 1.2 1.1v12zm10.1 0c0 .6-.5 1.1-1.2 1.1H19c-.7 0-1.2-.5-1.2-1.1v-12c0-.6.5-1.1 1.2-1.1h1.6c.7 0 1.2.5 1.2 1.1z"></svg:path><svg:g fill="#3e4347"><svg:path d="M0 13.6V18c0 .6.5 1.1 1.2 1.1h1.7V24c0 4.2 2.3 7.8 5.7 9.8V38c0 .6.5 1.1 1.2 1.1H20c.7 0 1.2-.5 1.2-1.1v-4.2c3.4-2 5.7-5.7 5.7-9.8v-4.8h1.7c.6 0 1.2-.5 1.2-1.1v-4.5c0-.5-.4-1-.9-1.1H.9c-.5.1-.9.5-.9 1.1"></svg:path><svg:path d="M60.1 25.8V64H64V25.8c0-1.8-.4-3.6-1.1-5.2q-1.05-2.4-3-4.2c-1.3-1.2-2.7-2.2-4.4-2.9s-3.5-1.1-5.4-1.1s-3.7.4-5.4 1.1c-1.6.7-3.1 1.6-4.4 2.9c-1.3 1.2-2.3 2.7-3 4.2c-.7 1.6-1.1 3.4-1.1 5.2v24.8c0 5.3-4.4 9.5-9.8 9.5s-9.8-4.3-9.8-9.5V39.2h-3.9v11.4c0 1.8.4 3.5 1.1 5.2q1.05 2.4 3 4.2c1.3 1.2 2.7 2.2 4.4 2.9s3.5 1 5.4 1s3.7-.4 5.4-1c1.6-.7 3.1-1.6 4.4-2.9c1.3-1.2 2.3-2.7 3-4.2c.7-1.6 1.1-3.4 1.1-5.2V25.8c0-5.3 4.4-9.5 9.8-9.5s9.8 4.3 9.8 9.5"></svg:path></svg:g>`,
})
export class EmojioneElectricPlugIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
