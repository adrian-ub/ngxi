import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileBoxIcon],svg[lucide-file-box-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01ZM7 17v5"></svg:path><svg:path d="M11.7 14.2L7 17l-4.7-2.8"></svg:path></svg:g>`,
})
export class LucideFileBoxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
