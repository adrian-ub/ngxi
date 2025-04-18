import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCrossSquareIcon],svg[lucide-lab-cross-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="3"></svg:rect><svg:path d="M14 10V7c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3H7c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"></svg:path></svg:g>`,
})
export class LucideLabCrossSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
