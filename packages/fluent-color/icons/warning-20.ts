import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWarning20Icon],svg[fluent-color-warning-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWarning200)" d="M8.681 2.785c.568-1.047 2.071-1.047 2.638 0l6.5 12.002A1.5 1.5 0 0 1 16.502 17H3.498a1.5 1.5 0 0 1-1.319-2.215z"></svg:path><svg:path fill="url(#fluentColorWarning201)" d="M10.5 7.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z"></svg:path><svg:path fill="url(#fluentColorWarning202)" d="M10 14.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorWarning200" x1="4.497" x2="13.972" y1="-.344" y2="18.914" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning201" x1="8" x2="11.603" y1="7" y2="14.686" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning202" x1="8" x2="11.603" y1="7" y2="14.686" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#242424"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWarning20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
