import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrIcon],svg[mdi-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 12c0 2.5-2 4.5-4.5 4.5S2 14.5 2 12s2-4.5 4.5-4.5S11 9.5 11 12m6.5-4.5C15 7.5 13 9.5 13 12s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5z" fill="currentColor"></svg:path>`,
})
export class MdiFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
