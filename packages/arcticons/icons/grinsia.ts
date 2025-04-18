import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGrinsiaIcon],svg[arcticons-grinsia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.203 39.203L25.481 27.576L24 45.5l-1.481-17.925L8.797 39.203l11.627-13.722L2.5 24l17.925-1.481L8.797 8.797l13.722 11.627L24 2.5l1.481 17.925L39.203 8.797L27.576 22.519L45.5 24l-17.925 1.481zM27.537 24a3.537 3.537 0 0 1-7.074.002V24a3.537 3.537 0 0 1 7.074 0"></svg:path>`,
})
export class ArcticonsGrinsiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
