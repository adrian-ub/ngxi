import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHashtagdatingIcon],svg[arcticons-hashtagdating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 40.5c0 1.108-.892 2-2 2H24C13.783 42.5 5.5 34.217 5.5 24S13.783 5.5 24 5.5S42.5 13.783 42.5 24zM22.587 18.07l14.772 2.605m-25.719 7.65l23.635 4.168m-2.783-18.769l-4.168 23.635m-9.212-16.855l-2.605 14.772"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.675 11.64l-1.042 5.909l-5.909-1.042"></svg:path>`,
})
export class ArcticonsHashtagdatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
