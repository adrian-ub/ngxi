import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFishIcon],svg[openmoji-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M16.11 35.211S11 30.404 12.044 24.14s13.575 1.044 14.619 6.265c0 0 3.133-5.221 8.354-6.265c0 0-1.045-5.221 0-8.354c0 0 11.486-4.177 15.663 6.265c0 0 11.486 2.089 12.53 11.486l-3.133 2.089l2.741 2.35s-.126 6.98-11.875 10.147c0 0-2.352 7.343-10.705 5.254l1.044-5.22s-6.265 1.043-14.619-8.354c0 0-3.133 9.397-15.663 7.309c0 0-.222-8.137 5.11-11.9"></svg:path><svg:path fill="#61b2e4" d="M41.78 28.668s-7.866 4.344-.865 11.048"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.11 35.211S11 30.404 12.044 24.14s13.575 1.044 14.619 6.265c0 0 3.133-5.221 8.354-6.265c0 0-1.045-5.221 0-8.354c0 0 11.486-4.177 15.663 6.265c0 0 11.486 2.089 12.53 11.486l-3.133 2.089l2.741 2.35s-.126 6.98-11.875 10.147c0 0-2.352 7.343-10.705 5.254l1.044-5.22s-6.265 1.043-14.619-8.354c0 0-3.133 9.397-15.663 7.309c0 0-.222-8.137 5.11-11.9"></svg:path><svg:path d="M41 28.75s-6 4-1 11"></svg:path></svg:g>`,
})
export class OpenmojiFishIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
