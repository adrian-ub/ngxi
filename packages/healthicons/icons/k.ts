import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsKIcon],svg[healthicons-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 23.172V12a2 2 0 1 0-4 0v24a2 2 0 1 0 4 0v-7.172l2-2l10.586 10.586a2 2 0 1 0 2.828-2.828L22.828 24l10.586-10.586a2 2 0 1 0-2.828-2.828z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsKIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
