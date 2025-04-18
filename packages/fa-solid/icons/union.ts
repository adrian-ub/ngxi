import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidUnionIcon],svg[fa-solid-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v240c0 59.2-53.85 106.04-115.13 94.14-45.58-8.85-76.87-51.5-76.87-97.93V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v240c0 114.18 100.17 205.4 217.26 190.38C314.04 465.96 384 378.89 384 281.32V48z" fill="currentColor"></svg:path>`,
})
export class FaSolidUnionIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
