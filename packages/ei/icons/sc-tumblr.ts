import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiScTumblrIcon],svg[ei-sc-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.9 32.4c-.5.2-1.5.5-2.3.5c-2.2.1-2.7-1.6-2.7-2.8v-8.7h5.6v-4.2H26V10h-4.1c-.1 0-.2.1-.2.2c-.2 2.2-1.3 6-5.5 7.5v3.6H19v9.1c0 3.1 2.3 7.6 8.4 7.5c2.1 0 4.3-.9 4.8-1.6z"></svg:path>`,
})
export class EiScTumblrIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
