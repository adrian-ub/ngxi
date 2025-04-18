import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSocialFlickrIcon],svg[entypo-social-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14c-2.188 0-3.96-1.789-3.96-4S2.812 6 5 6s3.96 1.789 3.96 4S7.187 14 5 14m10 0c-2.188 0-3.96-1.789-3.96-4S12.812 6 15 6s3.96 1.789 3.96 4s-1.773 4-3.96 4"></svg:path>`,
})
export class EntypoSocialFlickrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
