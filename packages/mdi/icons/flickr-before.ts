import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrBeforeIcon],svg[mdi-flickr-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="12" r="4" fill="currentColor"></svg:circle>`,
})
export class MdiFlickrBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
