import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureIcon],svg[healthicons-ui-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 20a2 2 0 0 1 2-2h3v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2h3a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2zm15-10a6 6 0 0 1 6 6v2H18v-2a6 6 0 0 1 6-6m9 16H15v-2h18zm-18 5h18v-2H15zm18 5H15v-2h18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiSecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
