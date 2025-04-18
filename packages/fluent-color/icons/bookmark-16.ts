import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookmark16Icon],svg[fluent-color-bookmark-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookmark160)" d="M3.78 13.919a.5.5 0 0 1-.778-.416V4.012a2 2 0 0 1 1.996-2l6-.011a2 2 0 0 1 2.004 1.996v9.506a.5.5 0 0 1-.778.416l-4.222-2.82z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookmark160" x1="3.002" x2="9.302" y1="3.019" y2="11.914" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookmark16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
