import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsICertificatePaperIcon],svg[healthicons-i-certificate-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 7v30a3 3 0 0 0 3 3h13v-3.535a4 4 0 1 1 4 0V40h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3m18 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1m-3 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path d="M26 44v-4h4v4l-2-1.5z"></svg:path></svg:g>`,
})
export class HealthiconsICertificatePaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
