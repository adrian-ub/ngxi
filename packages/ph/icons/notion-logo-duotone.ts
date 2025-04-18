import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoDuotoneIcon],svg[ph-notion-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 208h-40L64 48h40Z" opacity=".2"></svg:path><svg:path d="M216 40h-48a8 8 0 0 0 0 16h16v120.85L111 44.14a8 8 0 0 0-7-4.14H40a8 8 0 0 0 0 16h16v144H40a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16H72V79.15l73 132.71a8 8 0 0 0 7 4.14h40a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16m-59.27 160L77.53 56h21.74l79.2 144Z"></svg:path></svg:g>`,
})
export class PhNotionLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
