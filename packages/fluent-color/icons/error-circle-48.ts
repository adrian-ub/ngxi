import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorErrorCircle48Icon],svg[fluent-color-error-circle-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorErrorCircle480)" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"></svg:path><svg:path fill="url(#fluentColorErrorCircle481)" d="M24 13c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-12.5c0-.69.56-1.25 1.25-1.25m0 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorErrorCircle480" x1="10.25" x2="36.5" y1="-2.25" y2="47.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorErrorCircle481" x1="18.667" x2="29.067" y1="13" y2="34.131" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorErrorCircle48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
