import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiIbeaconIcon],svg[openmoji-ibeacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="32" r="5" fill="#3F3F3F"></svg:circle><svg:path fill="#D0CFCE" d="M34 62h4l-2-25z"></svg:path><svg:path fill="#9B9B9A" d="m36 37l2 25h-2.02z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="32" r="5"></svg:circle><svg:path d="m35 38l-2 25h6l-2-25"></svg:path><svg:path d="M42.265 50.985C50.239 48.355 56 40.855 56 32c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 8.855 5.761 16.354 13.735 18.985"></svg:path><svg:path d="M41.588 45.913C47.102 43.696 51 38.307 51 32c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 6.307 3.898 11.696 9.412 13.913"></svg:path><svg:path d="M40.895 40.715A9.99 9.99 0 0 0 46 32c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 3.743 2.06 7 5.105 8.715"></svg:path></svg:g>`,
})
export class OpenmojiIbeaconIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
