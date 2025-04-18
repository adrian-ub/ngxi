import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImage28Icon],svg[fluent-color-image-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImage282)" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25z"></svg:path><svg:path fill="url(#fluentColorImage280)" d="m24.368 23.334l-8.97-8.767a2 2 0 0 0-2.796 0l-8.97 8.767A3.75 3.75 0 0 0 6.75 25h14.5c1.3 0 2.445-.661 3.118-1.666"></svg:path><svg:path fill="url(#fluentColorImage281)" d="M19 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorImage280" x1="11.038" x2="13.526" y1="13.998" y2="25.579" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImage281" x1="18.2" x2="19.661" y1="7.556" y2="12.816" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImage282" cx="0" cy="0" r="1" gradientTransform="matrix(37.7143 47.73215 -43.41556 34.30366 -5.643 -9.375)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImage28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
