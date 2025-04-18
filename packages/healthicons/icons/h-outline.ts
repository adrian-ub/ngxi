import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHOutlineIcon],svg[healthicons-h-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 1 1 6 0v9h10v-9a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0v-9H19v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V25h14v11a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0v11H17V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
