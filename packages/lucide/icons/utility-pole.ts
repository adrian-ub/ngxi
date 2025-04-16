import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUtilityPoleIcon],svg[lucide-utility-pole-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0l-7 7l-7-7"></svg:path>`,
})
export class LucideUtilityPoleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
