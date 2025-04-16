import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListVideoIcon],svg[lucide-list-video-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H3m13-6H3m9 12H3m13-6l5 3l-5 3z"></svg:path>`,
})
export class LucideListVideoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
