import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideStretchVerticalIcon],svg[lucide-stretch-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="20" x="4" y="2" rx="2"></svg:rect><svg:rect width="6" height="20" x="14" y="2" rx="2"></svg:rect></svg:g>`,
})
export class LucideStretchVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
