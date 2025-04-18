import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSocketUkIcon],svg[lucide-lab-socket-uk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect><svg:path d="M12 8v2m-2 5H8m6 0h2"></svg:path></svg:g>`,
})
export class LucideLabSocketUkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
