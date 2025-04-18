import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlert24Icon],svg[fluent-color-alert-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlert240)" d="M15 18a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorAlert241)" d="M12 2.004a7.5 7.5 0 0 1 7.5 7.5v3.998l1.418 3.16a.95.95 0 0 1-.866 1.34h-16.1a.95.95 0 0 1-.867-1.339l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlert240" x1="12" x2="12.019" y1="17.5" y2="20.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlert241" x1="21.027" x2="5.578" y1="17.995" y2="3.776" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlert24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
