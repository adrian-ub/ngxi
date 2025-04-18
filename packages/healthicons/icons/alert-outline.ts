import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertOutlineIcon],svg[healthicons-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 30V8a2 2 0 1 0-4 0v22a2 2 0 1 0 4 0m-4 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-36a4 4 0 0 0-4 4v22a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4m0 32a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAlertOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
