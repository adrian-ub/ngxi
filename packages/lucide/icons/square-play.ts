import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePlayIcon],svg[lucide-square-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="m9 8l6 4l-6 4Z"></svg:path></svg:g>`,
})
export class LucideSquarePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
