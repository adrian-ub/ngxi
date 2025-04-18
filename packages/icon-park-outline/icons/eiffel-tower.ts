import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEiffelTowerIcon],svg[icon-park-outline-eiffel-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M21 8c0 11-3.5 25-10 36M27 8c0 11 3.5 25 10 36M4 44h40"></svg:path><svg:path d="M14 30h20m-17-9h14M20 8h8m-4-4v4"></svg:path><svg:path stroke-linejoin="round" d="M18 44s.813-2.812 2-4c1-1 2-2 4-2s3 1 4 2c1.344 1.344 2 4 2 4"></svg:path></svg:g>`,
})
export class IconParkOutlineEiffelTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
