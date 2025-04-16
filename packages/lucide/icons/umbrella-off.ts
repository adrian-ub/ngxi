import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUmbrellaOffIcon],svg[lucide-umbrella-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v1m3.5 18a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575M17.5 12H22A10 10 0 0 0 9.004 3.455M2 2l20 20"></svg:path>`,
})
export class LucideUmbrellaOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
