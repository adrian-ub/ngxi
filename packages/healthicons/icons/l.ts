import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLIcon],svg[healthicons-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 10a2 2 0 0 1 2 2v22h10a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsLIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
