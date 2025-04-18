import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCustomize26Icon],svg[garden-customize-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 17.36A4.36 4.36 0 1 1 17.36 13A4.36 4.36 0 0 1 13 17.36m9.63-5C21 10.55 17.28 6 13 6s-8 4.54-9.63 6.3a1 1 0 0 0 0 1.37C5 15.45 8.72 20 13 20s8-4.54 9.63-6.3a1 1 0 0 0 0-1.37"></svg:path><svg:circle cx="13" cy="13" r="2.7"></svg:circle></svg:g>`,
})
export class GardenCustomize26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
