import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabDressIcon],svg[lucide-lab-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 2v3a5.14 5.14 0 0 1 .7 4.8l-.2.5a7.64 7.64 0 0 0 .4 6.3C17.7 17.9 19 20 19 20s-3.1 2-7 2s-7-2-7-2s1.3-2.1 2.1-3.5a7.64 7.64 0 0 0 .4-6.2l-.2-.5A5.66 5.66 0 0 1 8 5V2"></svg:path><svg:path d="M16 5c-1.8 0-3.3 1-4 2.5C11.3 6 9.8 5 8 5"></svg:path></svg:g>`,
})
export class LucideLabDressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
