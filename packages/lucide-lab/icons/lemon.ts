import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLemonIcon],svg[lucide-lab-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.6 2.4c-.5.2-1.3.6-1.8.6H12a9 9 0 0 0-9 9v3.8c0 .6-.4 1.3-.6 1.8a2.95 2.95 0 0 0 4 4c.5-.2 1.3-.6 1.8-.6H12a9 9 0 0 0 9-9V8.2c0-.6.4-1.3.6-1.8a2.95 2.95 0 0 0-4-4"></svg:path><svg:path d="M7 12c0-2.8 2.2-5 5-5"></svg:path></svg:g>`,
})
export class LucideLabLemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
