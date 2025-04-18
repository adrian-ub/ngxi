import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAbButtonIcon],svg[emojione-ab-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M28.1 45H32l-8.8-26h-4.4L10 45h3.9l3.1-9.1h8.1zm-9.8-13l2.7-8.1l2.7 8.1zM52 26.5c0-4.1-2.2-7.5-6-7.5H36v26h9.2c3.8 0 6.8-3.4 6.8-7.5c0-2.2-.8-4.1-2.2-5.5c1.4-1.4 2.2-3.3 2.2-5.5m-6.8 14.4h-5.6v-6.8h5.6c1.7 0 3.1 1.5 3.1 3.4c0 1.8-1.4 3.4-3.1 3.4m0-10.9h-5.6v-6.8h5.6c1.7 0 3.1 1.5 3.1 3.4S46.9 30 45.2 30"></svg:path>`,
})
export class EmojioneAbButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
