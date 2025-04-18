import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeFeedIcon],svg[bytesize-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="26" r="2" fill="currentColor"></svg:circle><svg:path d="M4 15c7 0 13 6 13 13M4 6c13 0 22 9 22 22"></svg:path></svg:g>`,
})
export class BytesizeFeedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
