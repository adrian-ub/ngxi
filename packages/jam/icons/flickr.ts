import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFlickrIcon],svg[jam-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="4.727" cy="4.757" r="4.727"></svg:circle><svg:circle cx="15.255" cy="4.757" r="4.727"></svg:circle></svg:g>`,
})
export class JamFlickrIcon {
  readonly viewBox = input("-2 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
