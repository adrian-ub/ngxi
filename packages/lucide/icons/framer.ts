import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFramerIcon],svg[lucide-framer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></svg:path>`,
})
export class LucideFramerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
