import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHeart48Icon],svg[fluent-color-heart-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHeart480)" d="M21.263 10.178a10.77 10.77 0 0 0-12.575-.296c-5.65 3.866-6.308 11.953-1.357 16.681l15.806 15.092a1.25 1.25 0 0 0 1.726 0l15.803-15.091c4.952-4.728 4.293-12.816-1.358-16.681a10.77 10.77 0 0 0-12.577.298L24 12.246z"></svg:path><svg:defs><svg:lineargradient id="fluentColorHeart480" x1="-4.752" x2="15.69" y1="-1.713" y2="42.43" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHeart48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
