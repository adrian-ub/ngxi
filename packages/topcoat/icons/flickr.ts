import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatFlickrIcon],svg[topcoat-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.96 13.65c4.06 0 7.36 3.289 7.36 7.35s-3.301 7.35-7.36 7.35s-7.35-3.289-7.35-7.35s3.29-7.35 7.35-7.35m-15.92 0c4.06 0 7.35 3.289 7.35 7.35s-3.29 7.35-7.35 7.35S4.68 25.061 4.68 21s3.3-7.35 7.36-7.35M.5 1.5v39h39v-39z"></svg:path>`,
})
export class TopcoatFlickrIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
