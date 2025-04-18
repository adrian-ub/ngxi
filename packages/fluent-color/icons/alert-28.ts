import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlert28Icon],svg[fluent-color-alert-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlert280)" d="M17.5 21.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="url(#fluentColorAlert281)" d="M14.002 3a8.5 8.5 0 0 1 8.494 8.246v.255h.004v4.112l1.413 3.644q.057.148.077.306l.01.157a1.28 1.28 0 0 1-1.149 1.274l-.13.006H5.28a1.28 1.28 0 0 1-1.234-1.62l.041-.124l1.416-3.644v-4.11A8.5 8.5 0 0 1 14.003 3"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlert280" x1="14" x2="14.023" y1="20.5" y2="24.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlert281" x1="21.494" x2="6.599" y1="19" y2="5.29" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlert28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
