import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTumblrIcon],svg[meteor-icons-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17.5V22h-4a5 5 0 0 1-5-5v-7H7V6.5q3.3-.9 3.5-4.5H14v4h4v4h-4v6.5q0 1 1 1Z"></svg:path>`,
})
export class MeteorIconsTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
