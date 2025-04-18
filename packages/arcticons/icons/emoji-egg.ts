import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiEggIcon],svg[arcticons-emoji-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c8.495 0 13.848-7.914 13.848-17.282C37.848 15.537 32.288 5.5 24 5.5S10.152 15.537 10.152 25.218C10.152 34.587 15.505 42.5 24 42.5"></svg:path>`,
})
export class ArcticonsEmojiEggIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
