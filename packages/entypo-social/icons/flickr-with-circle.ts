import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSocialFlickrWithCircleIcon],svg[entypo-social-flickr-with-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.436 12a1.99 1.99 0 0 1-1.982-2c0-1.105.887-2 1.982-2s1.982.895 1.982 2s-.889 2-1.982 2m5.129 0a1.99 1.99 0 0 1-1.983-2c0-1.105.888-2 1.983-2a1.99 1.99 0 0 1 1.982 2c0 1.105-.887 2-1.982 2"></svg:path>`,
})
export class EntypoSocialFlickrWithCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
