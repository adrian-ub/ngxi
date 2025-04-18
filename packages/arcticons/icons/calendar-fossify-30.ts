import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarFossify30Icon],svg[arcticons-calendar-fossify-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.079 33.081c0 2.074 1.659 3.733 3.733 3.733s3.595-1.659 3.595-3.733v-3.733c0-2.074-1.66-3.734-3.595-3.734s-3.733 1.66-3.733 3.734zm-9.485 2.879c.773.647 1.608.944 3.483.944h.437a2.8 2.8 0 0 0 2.799-2.8v0a2.8 2.8 0 0 0-2.8-2.799m-3.92-4.665c.775-.646 1.61-.94 3.485-.936l.436.003a2.8 2.8 0 0 1 2.799 2.8v0a2.8 2.8 0 0 1-2.8 2.798m-2.151 0h2.152"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.532 9.567h24.936a4 4 0 0 1 4 4V38.5a4 4 0 0 1-4 4H11.532a4 4 0 0 1-4-4V13.567a4 4 0 0 1 4-4M13.715 5.5v4.068M34.14 5.5v4.068M9.731 19.89h28.36"></svg:path>`,
})
export class ArcticonsCalendarFossify30Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
