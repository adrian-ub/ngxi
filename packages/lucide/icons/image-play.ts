import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideImagePlayIcon],svg[lucide-image-play-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 16l-5 5m5 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"></svg:path><svg:path d="M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"></svg:path><svg:circle cx="9" cy="9" r="2"></svg:circle></svg:g>`,
})
export class LucideImagePlayIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
