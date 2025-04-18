import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWindmillIcon],svg[lucide-lab-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 14l8 4l2-4L4 6l2-4l8 4"></svg:path><svg:path d="m8 8l-4 8l4 2m8-6l4-8l-4-2L6 22m13 0l-2.4-4.6M12.5 20v2M4 22h17"></svg:path></svg:g>`,
})
export class LucideLabWindmillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
