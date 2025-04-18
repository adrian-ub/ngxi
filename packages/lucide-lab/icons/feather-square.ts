import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFeatherSquareIcon],svg[lucide-lab-feather-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.3 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.8"></svg:path><svg:path d="m7 12l8.5-8.5c2-2 4.5-2 6.5 0L16.5 9H10"></svg:path></svg:g>`,
})
export class LucideLabFeatherSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
