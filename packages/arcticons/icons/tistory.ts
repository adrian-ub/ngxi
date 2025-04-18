import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTistoryIcon],svg[arcticons-tistory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.667 5.5c2.559 0 4.625 2.066 4.625 4.625s-2.066 4.625-4.625 4.625s-4.625-2.066-4.625-4.625S9.107 5.5 11.667 5.5M24 5.5c2.56 0 4.625 2.066 4.625 4.625S26.559 14.75 24 14.75s-4.625-2.066-4.625-4.625S21.441 5.5 24 5.5m12.333 0c2.56 0 4.625 2.066 4.625 4.625s-2.065 4.625-4.625 4.625s-4.625-2.066-4.625-4.625S33.774 5.5 36.333 5.5M24 17.833c2.56 0 4.625 2.066 4.625 4.625S26.559 27.083 24 27.083s-4.625-2.065-4.625-4.625s2.066-4.625 4.625-4.625m0 12.334c2.56 0 4.625 2.065 4.625 4.625S26.559 39.417 24 39.417s-4.625-2.066-4.625-4.625s2.066-4.625 4.625-4.625M29.653 42.5H18.347"></svg:path>`,
})
export class ArcticonsTistoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
