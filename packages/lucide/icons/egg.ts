import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideEggIcon],svg[lucide-egg-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22c6.23-.05 7.87-5.57 7.5-10c-.36-4.34-3.95-9.96-7.5-10c-3.55.04-7.14 5.66-7.5 10c-.37 4.43 1.27 9.95 7.5 10"></svg:path>`,
})
export class LucideEggIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
