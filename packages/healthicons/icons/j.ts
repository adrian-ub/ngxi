import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJIcon],svg[healthicons-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M30 10a2 2 0 0 1 2 2v18a8 8 0 1 1-16 0a2 2 0 1 1 4 0a4 4 0 1 0 8 0V12a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsJIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
