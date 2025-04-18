import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHexagons7Icon],svg[lucide-lab-hexagons-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.3 4.3v3.9L2 10.1v3.8l3.3 1.9v3.9l3.4 1.9l3.3-1.9l3.3 1.9l3.4-1.9v-3.9l3.3-1.9v-3.8l-3.3-1.9V4.3l-3.4-1.9L12 4.3L8.7 2.4ZM12 8.2V4.3m6.7 3.9l-3.4 1.9m0 3.8l3.4 1.9M12 19.7v-3.9m-3.3-1.9l-3.4 1.9m0-7.6l3.4 1.9"></svg:path><svg:path d="m8.7 13.9l3.3 1.9l3.3-1.9v-3.8L12 8.2l-3.3 1.9Z"></svg:path></svg:g>`,
})
export class LucideLabHexagons7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
