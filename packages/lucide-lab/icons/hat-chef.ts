import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHatChefIcon],svg[lucide-lab-hat-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 13.85A4 4 0 0 1 7.4 6a5 5 0 0 1 9.2 0a4 4 0 0 1 1.4 7.85V21H6ZM6 17h12"></svg:path>`,
})
export class LucideLabHatChefIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
