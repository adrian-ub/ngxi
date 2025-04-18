import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTumblrIcon],svg[uil-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.79 18a4.7 4.7 0 0 1-1.62.35a1.75 1.75 0 0 1-1.92-2v-6.23h4v-3h-4V2h-2.92a.15.15 0 0 0-.14.15a6.11 6.11 0 0 1-3.94 5.39v2.58h2v6.54c0 2.23 1.65 5.41 6 5.34c1.47 0 3.11-.64 3.47-1.17Z"></svg:path>`,
})
export class UilTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
