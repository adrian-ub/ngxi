import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCloudAlertIcon],svg[lucide-cloud-alert-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v4m0 4h.01M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"></svg:path>`,
})
export class LucideCloudAlertIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
