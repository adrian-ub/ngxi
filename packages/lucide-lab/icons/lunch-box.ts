import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLunchBoxIcon],svg[lucide-lab-lunch-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></svg:path><svg:path d="M8 21a2 2 0 0 0 2-2v-8a4 4 0 0 0-8 0v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4H6m-4 6h20"></svg:path></svg:g>`,
})
export class LucideLabLunchBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
