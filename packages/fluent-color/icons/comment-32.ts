import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorComment32Icon],svg[fluent-color-comment-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorComment320)" d="M6.5 3A4.5 4.5 0 0 0 2 7.5v12A4.5 4.5 0 0 0 6.5 24H8v4.081c0 1.706 2 2.629 3.298 1.522L17.868 24H25.5a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 25.5 3z"></svg:path><svg:defs><svg:radialgradient id="fluentColorComment320" cx="0" cy="0" r="1" gradientTransform="matrix(33.58648 38.12723 -69.00582 60.7876 -4.462 -5.334)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorComment32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
