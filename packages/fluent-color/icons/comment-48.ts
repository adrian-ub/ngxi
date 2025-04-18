import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorComment48Icon],svg[fluent-color-comment-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorComment480)" d="M4 13.25A7.25 7.25 0 0 1 11.25 6h25.5A7.25 7.25 0 0 1 44 13.25v15.5A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.058 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75z"></svg:path><svg:defs><svg:radialgradient id="fluentColorComment480" cx="0" cy="0" r="1" gradientTransform="matrix(47.9808 53.59654 -97.18809 87.0049 -5.23 -5.715)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorComment48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
