import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHouseRoofOffIcon],svg[lucide-lab-house-roof-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 6.8l6.6 6.6a2 2 0 0 0 2.8-2.8l-8-8c-.8-.8-2-.8-2.8 0L9.2 4M2 2l20 20M6.6 6.6l-4 4a2 2 0 0 0 2.8 2.8l4-4M14 22v-6a2 2 0 0 0-4 0v6"></svg:path><svg:path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class LucideLabHouseRoofOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
