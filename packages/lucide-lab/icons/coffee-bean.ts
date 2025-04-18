import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCoffeeBeanIcon],svg[lucide-lab-coffee-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.05 19.95a11.24 8.585 135 0 0 15.9-15.9a11.24 8.585 135 0 0-15.9 15.9"></svg:path><svg:path d="M19.8 4.2C20 14 4 10 4.2 19.8"></svg:path></svg:g>`,
})
export class LucideLabCoffeeBeanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
