import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHeadphoneOffIcon],svg[lucide-headphone-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 14h-1.343M9.128 3.47A9 9 0 0 1 21 12v3.343M2 2l20 20m-1.586-1.586A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"></svg:path>`,
})
export class LucideHeadphoneOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
