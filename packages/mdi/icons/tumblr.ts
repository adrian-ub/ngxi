import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrIcon],svg[mdi-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 11h-4v4.5c0 .94.28 1.5 1.5 1.5H17v4s-1.46.05-2.83.05c-3.37 0-4.67-2.05-4.67-4.3V11H7V7c3.07-.26 3.27-2.5 3.5-4H13v4h4" fill="currentColor"></svg:path>`,
})
export class MdiTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
