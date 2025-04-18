import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabOwlIcon],svg[lucide-lab-owl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="9" rx="8" ry="7"></svg:ellipse><svg:path d="M12 9a4 4 0 1 1 8 0v12h-4C9.4 21 4 15.6 4 9a4 4 0 1 1 8 0v1M8 9h.01M16 9h.01"></svg:path><svg:path d="M20 21a3.9 3.9 0 1 1 0-7.8m-10 6.2V22m4-1.15V22"></svg:path></svg:g>`,
})
export class LucideLabOwlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
