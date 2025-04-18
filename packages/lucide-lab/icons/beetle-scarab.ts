import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBeetleScarabIcon],svg[lucide-lab-beetle-scarab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 2l1.88 1.88m4.24 0L16 2M9 7.13V6a3 3 0 1 1 6 0v1.13"></svg:path><svg:path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9"></svg:path><svg:path d="M5 4.8C3.2 6.2 2 8.5 2 11h20c0-2.5-1.2-4.8-3-6.2M6.08 15h-4c.2 2.4 1.25 4.4 2.8 6m14.22 0a9 9.4 0 0 0 2.82-6h-4"></svg:path></svg:g>`,
})
export class LucideLabBeetleScarabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
