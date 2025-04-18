import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDatabase20Icon],svg[fluent-color-database-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDatabase200)" d="M14.69 6.016c.47-.235.927-.534 1.31-.896V15c0 1.657-2.686 3-6 3s-6-1.343-6-3V5.12c.383.362.84.661 1.31.896C6.562 6.642 8.222 7 10 7s3.438-.358 4.69-.984"></svg:path><svg:path fill="url(#fluentColorDatabase201)" fill-opacity=".7" d="M14.69 6.016c.47-.235.927-.534 1.31-.896V15c0 1.657-2.686 3-6 3s-6-1.343-6-3V5.12c.383.362.84.661 1.31.896C6.562 6.642 8.222 7 10 7s3.438-.358 4.69-.984"></svg:path><svg:path fill="url(#fluentColorDatabase202)" d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3"></svg:path><svg:defs><svg:lineargradient id="fluentColorDatabase200" x1="6.833" x2="14.109" y1="2.219" y2="16.454" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#29C3FF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase201" x1="11.857" x2="14.581" y1="6.702" y2="19.311" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase202" x1="20.5" x2="13.566" y1="11" y2="-1.621" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#58AAFE"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDatabase20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
