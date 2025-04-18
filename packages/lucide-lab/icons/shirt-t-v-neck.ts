import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabShirtTVNeckIcon],svg[lucide-lab-shirt-t-v-neck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 11H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2c0 2.2 3 5 4 5s4-2.8 4-5l4.1 1.4C21.2 3.7 22 4.9 22 6v4c0 .6-.4 1-1 1h-3"></svg:path><svg:path d="M18 8v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8"></svg:path></svg:g>`,
})
export class LucideLabShirtTVNeckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
