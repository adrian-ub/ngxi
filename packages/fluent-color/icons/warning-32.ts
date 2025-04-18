import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWarning32Icon],svg[fluent-color-warning-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWarning320)" d="M12.937 3.809c1.33-2.41 4.796-2.41 6.127 0l10.494 18.999c1.288 2.333-.4 5.192-3.064 5.192H5.507c-2.665 0-4.352-2.86-3.064-5.192z"></svg:path><svg:path fill="url(#fluentColorWarning321)" d="M17.25 22a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M16 9a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorWarning320" x1="6.377" x2="22.707" y1="-2.061" y2="31.433" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning321" x1="12.666" x2="20.071" y1="9" y2="22.856" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWarning32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
