import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSearchLargeIcon],svg[lucide-search-large-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path clip-rule="evenodd" d="M18.874 19.581a6 6 0 1 1 .707-.707l4.273 4.272l-.708.708zM20 15a5 5 0 1 1-10 0a5 5 0 0 1 10 0z" fill="currentColor" fill-rule="evenodd"></svg:path></svg:g>`,
})
export class LucideSearchLargeIcon {
  readonly viewBox = input('0 0 32 32')
  readonly width = input('1em')
  readonly height = input('1em')
}
