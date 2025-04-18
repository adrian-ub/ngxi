import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorErrorCircle20Icon],svg[fluent-color-error-circle-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorErrorCircle200)" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16"></svg:path><svg:path fill="url(#fluentColorErrorCircle201)" fill-rule="evenodd" d="M10.5 6.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0zM10 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorErrorCircle200" x1="4.5" x2="15" y1="-.5" y2="19.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorErrorCircle201" x1="8" x2="12" y1="6" y2="14" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorErrorCircle20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
