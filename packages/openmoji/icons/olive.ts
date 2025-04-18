import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOliveIcon],svg[openmoji-olive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="35.977" cy="36.145" fill="#b1cc33" rx="23.045" ry="16.612" transform="rotate(-45 35.976 36.145)"></svg:ellipse><svg:path fill="#5c9e31" d="M56.13 29.374a28.57 28.57 0 0 1-7.424 12.372c-9 9-21.683 10.908-28.329 4.262a13.7 13.7 0 0 1-3.83-8.137S12.683 57.898 31 56c0 0 18.01-.288 24.746-22.73Z"></svg:path><svg:path fill="#a57939" d="M47.974 31.77a8.4 8.4 0 0 1-5.673-2.685c-2.848-2.848-3.533-6.623-1.56-8.595a4.39 4.39 0 0 1 4.186-.978a9.17 9.17 0 0 1 4.409 2.537c2.848 2.848 3.533 6.623 1.56 8.596a4.03 4.03 0 0 1-2.922 1.125"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:ellipse cx="35.977" cy="36.145" rx="23.045" ry="16.612" transform="rotate(-45 35.976 36.145)"></svg:ellipse><svg:path stroke-linecap="round" d="M50.256 29.938c-1.552 1.552-4.767.854-7.181-1.56s-3.113-5.629-1.56-7.181s4.767-.854 7.18 1.56a8.2 8.2 0 0 1 2.254 3.85"></svg:path></svg:g>`,
})
export class OpenmojiOliveIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
