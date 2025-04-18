import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAtom2LineIcon],svg[majesticons-atom-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016"></svg:path><svg:circle cx="17.657" cy="6.343" r="2" transform="rotate(45 17.657 6.343)"></svg:circle><svg:circle cx="6.343" cy="17.657" r="2" transform="rotate(45 6.343 17.657)"></svg:circle><svg:circle cx="12" cy="12" r="2" transform="rotate(45 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsAtom2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
