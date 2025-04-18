import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFoxFaceTailIcon],svg[lucide-lab-fox-face-tail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.9 8.3C20.6 7 21 5.6 21 4c0-.6-.4-1-1-1c-2.3 0-4.3.8-5.9 2.2a15 15 0 0 0-4.2 0A8.78 8.78 0 0 0 4 3c-.6 0-1 .4-1 1c0 1.6.4 3 1.1 4.3c-.6.7-1.1 1.4-1.4 2.2C4 13 11 16 12 16s8-3 9.3-5.5c-.3-.8-.8-1.5-1.4-2.2M9 9v.5m4 3.5h-2m1 3v-3m3-4v.5"></svg:path><svg:path d="M6.3 20.5A6.87 6.87 0 0 0 9 15H2.2c.8 4 4.9 7 9.8 7c5.5 0 10-3.8 10-8.5c0-1.1-.2-2.1-.7-3"></svg:path></svg:g>`,
})
export class LucideLabFoxFaceTailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
