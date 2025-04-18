import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlert16Icon],svg[fluent-color-alert-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlert160)" d="M10 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorAlert161)" d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlert160" x1="8.013" x2="8.013" y1="11.5" y2="14" gradientUnits="userSpaceOnUse"><svg:stop offset=".152" stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlert161" x1="13.516" x2="3.879" y1="11.996" y2="3.325" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlert16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
