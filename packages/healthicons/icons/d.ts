import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDIcon],svg[healthicons-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 12a2 2 0 0 1 2-2h8c7.732 0 14 6.268 14 14s-6.268 14-14 14h-8a2 2 0 0 1-2-2zm4 2v20h6c5.523 0 10-4.477 10-10s-4.477-10-10-10z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsDIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
