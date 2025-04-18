import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRssIcon],svg[bx-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001z"></svg:path><svg:path fill="currentColor" d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001"></svg:path><svg:circle cx="6" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
