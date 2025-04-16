import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideImageUpscaleIcon],svg[lucide-image-upscale-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3h5v5m-4 13h2a2 2 0 0 0 2-2m0-7v3m0-12l-5 5M3 7V5a2 2 0 0 1 2-2m0 18l4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3"></svg:path><svg:rect width="10" height="10" x="3" y="11" rx="1"></svg:rect></svg:g>`,
})
export class LucideImageUpscaleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
