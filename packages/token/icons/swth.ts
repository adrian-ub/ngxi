import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSwthIcon],svg[token-swth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.245 13.688H3.557c.9 1.125 2.065 1.592 2.532 1.688z"></svg:path><svg:path fill="currentColor" d="M5.864 15.433a5.3 5.3 0 0 0 2.757.506c3.376-.281 5.627-3.095 5.627-3.938c1.013.168 3.292.168 5.053-.974A7.316 7.316 0 1 0 5.87 15.433z"></svg:path><svg:path fill="currentColor" d="M19.268 10.508c-1.779.732-4.513.929-5.852.929a11.1 11.1 0 0 1-4.828 4.501h.045c3.376-.281 5.627-3.095 5.627-3.939c1.012.17 3.291.17 5.053-.973a7 7 0 0 0-.046-.518"></svg:path><svg:path fill="currentColor" d="M11.811 19.876c5.076 0 9.189-3.922 9.189-8.755v-.248c-1.632 1.435-3.472 2.206-5.908 1.97c-.377 1.463-1.97 4.22-5.34 4.22c-2.886 0-5.402-1.924-6.752-3.46c1.12 3.629 4.636 6.273 8.806 6.273z"></svg:path>`,
})
export class TokenSwthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
