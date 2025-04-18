import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphChair2Icon],svg[si-glyph-chair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 14.095V11h1.938v3.085c1.739.205 3.031.972 3.031 1.886H5.045c0-.9 1.254-1.657 2.955-1.876m3.379-6.142H6.622L6.027 1.34S5.681.016 9 .016s2.975 1.324 2.975 1.324z"></svg:path><svg:path d="M12.969 11.225c0 .416-.231.752-.629.752H5.66c-.396 0-.629-.336-.629-.752c0 0 .458-2.195 1.357-2.195h5.066c1.024-.001 1.515 2.195 1.515 2.195m1.006-3.715c0 .395-.213.475-.476.475s-.476-.08-.476-.475V4.485c0-.396.213-.453.476-.453s.476.058.476.453zm-9 0c0 .395-.213.475-.476.475s-.476-.08-.476-.475V4.485c0-.396.213-.453.476-.453s.476.058.476.453z"></svg:path></svg:g>`,
})
export class SiGlyphChair2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
