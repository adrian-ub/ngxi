import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabOliveIcon],svg[lucide-lab-olive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 10l4-3m-4 0l4 3"></svg:path><svg:ellipse cx="12" cy="12" rx="9" ry="10"></svg:ellipse><svg:path d="m2 22l5-5M18.69 5.31L22 2"></svg:path></svg:g>`,
})
export class LucideLabOliveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
