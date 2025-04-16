import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListMusicIcon],svg[lucide-list-music-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15V6m-2.5 12a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 12H3m13-6H3m9 12H3"></svg:path>`,
})
export class LucideListMusicIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
