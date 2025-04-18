import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFlickrCircleIcon],svg[jam-flickr-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="7.364" cy="10.379" r="2.364"></svg:circle><svg:circle cx="12.628" cy="10.379" r="2.364"></svg:circle><svg:path d="M10 18.494a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c-5.523 0-10-4.478-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamFlickrCircleIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
