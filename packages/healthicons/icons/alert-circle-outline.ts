import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertCircleOutlineIcon],svg[healthicons-alert-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m0 2C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18S33.941 6 24 6" clip-rule="evenodd"></svg:path><svg:path d="M26 13a2 2 0 1 0-4 0v14a2 2 0 1 0 4 0zm-2 20a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class HealthiconsAlertCircleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
