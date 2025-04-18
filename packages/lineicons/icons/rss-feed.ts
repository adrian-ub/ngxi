import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRssFeedIcon],svg[lineicons-rss-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.9 1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c28.6 0 51.8 23 51.8 51.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C62.3 26.7 37 1.8 5.9 1.8"></svg:path><svg:path fill="currentColor" d="M5.9 15.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c21.4 0 38.7 17 38.7 37.8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-23.5-19.4-42.4-43.3-42.4"></svg:path><svg:path fill="currentColor" d="M5.9 27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c14.6 0 26.5 11.7 26.5 26c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C36.9 40.6 23 27 5.9 27"></svg:path><svg:path fill="currentColor" d="M5.9 39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c7.7 0 13.9 6.2 13.9 13.8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-10.1-8.3-18.4-18.5-18.4"></svg:path><svg:path fill="currentColor" d="M8.3 49.1c-3.6 0-6.6 3-6.6 6.6s2.9 6.6 6.6 6.6s6.6-3 6.6-6.6s-3-6.6-6.6-6.6m0 8.7c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1c0 1.1-.9 2.1-2.1 2.1"></svg:path>`,
})
export class LineiconsRssFeedIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
