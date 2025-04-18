import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabToastIcon],svg[lucide-lab-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.5 3A3.5 3.5 0 0 0 3 8.9V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.9A3.5 3.5 0 0 0 18.5 3Z"></svg:path><svg:path d="M7.5 10c0-1.8 1.2-3 3.2-3c2.5 0 2.4 1.5 3.8 2.5s2.5 1 2.5 3c0 2.2-1.2 3.2-3.5 3.2c-1.2 0-1.2 1.2-3 1.2S7 16 7 14.2c0-1.5.8-1.5.8-2.5c0-.7-.3-1.2-.3-1.7"></svg:path></svg:g>`,
})
export class LucideLabToastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
