import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabKebabIcon],svg[lucide-lab-kebab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 12l4.2-4.2c.4-.4.4-1 .1-1.5a2.9 2.9 0 1 1 4.8.8"></svg:path><svg:path d="M15.3 11.3c.9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0c.9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0l-2.6-2.6c-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0c-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0Zm-5 5l-2.6-2.6M9 15l-2 2m-5 5l2-2"></svg:path></svg:g>`,
})
export class LucideLabKebabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
