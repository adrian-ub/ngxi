import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoodsoulIcon],svg[arcticons-foodsoul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.311 42.5V12.982h-5.917L24 36.447l-9.394-23.465H8.689V42.5M10.73 9.583a2.041 2.041 0 1 1 2.042-2.041h26.539"></svg:path>`,
})
export class ArcticonsFoodsoulIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
