import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStrawberryIcon],svg[lucide-lab-strawberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 7l3.5-3.5M17 2v5h5M2.1 17.1a4 4 0 0 0 4.8 4.8l9-2.1a6.32 6.32 0 0 0 2.9-10.9L15 5.2A6.5 6.5 0 0 0 4.1 8.3Zm6.4-7.6h.01m3.99-1h.01m-5.01 5h.01m3.99-1h.01m3.99-1h.01m-9.01 6h.01m3.99-1h.01m3.99-1h.01"></svg:path>`,
})
export class LucideLabStrawberryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
