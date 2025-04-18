import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsGameIcon],svg[proicons-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.031 3.887H7.97a5.22 5.22 0 0 0-5.219 5.22v8.265c0 2.075 2.533 3.085 3.962 1.581l2.976-3.134h4.624l2.875 3.46c1.374 1.654 4.063.682 4.063-1.467V9.106a5.22 5.22 0 0 0-5.219-5.219M8.138 8.39v4m-2-2h4"></svg:path><svg:circle cx="14.662" cy="9.39" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.862" cy="11.59" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
