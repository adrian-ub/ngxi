import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMove3dIcon],svg[lucide-move-3d-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 3v16h16M5 19l6-6"></svg:path><svg:path d="m2 6l3-3l3 3m10 10l3 3l-3 3"></svg:path></svg:g>`,
})
export class LucideMove3dIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
