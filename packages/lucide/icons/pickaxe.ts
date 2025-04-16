import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePickaxeIcon],svg[lucide-pickaxe-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.531 12.469L6.619 20.38a1 1 0 1 1-3-3l7.912-7.912m4.155-5.154A12.5 12.5 0 0 0 5.461 2.958A1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"></svg:path><svg:path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"></svg:path><svg:path d="M19.686 8.314a12.5 12.5 0 0 1 1.356 10.225a1 1 0 0 1-1.751-.119a22 22 0 0 0-3.393-6.319"></svg:path></svg:g>`,
})
export class LucidePickaxeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
