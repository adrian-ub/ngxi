import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrAfterIcon],svg[mdi-flickr-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="12" r="4" fill="currentColor"></svg:circle>`,
})
export class MdiFlickrAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
