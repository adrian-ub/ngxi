import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialFlickrIcon],svg[foundation-social-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79 14H21c-3.85 0-7 3.15-7 7v58c0 3.85 3.15 7 7 7h58c3.85 0 7-3.15 7-7V21c0-3.85-3.15-7-7-7M35.435 61.5c-6.456 0-11.69-5.233-11.69-11.689s5.234-11.69 11.69-11.69s11.689 5.233 11.689 11.69S41.891 61.5 35.435 61.5m29.633 0c-6.456 0-11.69-5.233-11.69-11.689s5.233-11.69 11.69-11.69s11.689 5.233 11.689 11.69c.001 6.456-5.233 11.689-11.689 11.689"></svg:path>`,
})
export class FoundationSocialFlickrIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
