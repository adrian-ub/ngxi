import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlaySquareIcon],svg[mage-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.99 7.973v8.052a.885.885 0 0 0 1.424.699l5.575-4.336a.884.884 0 0 0-.053-1.433L10.36 7.238a.884.884 0 0 0-1.371.735"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MagePlaySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
