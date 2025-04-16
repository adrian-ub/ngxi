import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLibraryIcon],svg[lucide-library-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 6l4 14M12 6v14M8 8v12M4 4v16"></svg:path>`,
})
export class LucideLibraryIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
