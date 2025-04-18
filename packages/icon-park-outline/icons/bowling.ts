import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBowlingIcon],svg[icon-park-outline-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24.777 44c11.05 0 20-8.95 20-20s-8.95-20-20-20s-20 8.95-20 20s8.95 20 20 20Z"></svg:path><svg:path fill="currentColor" d="M24.777 26c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m7-8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"></svg:path></svg:g>`,
})
export class IconParkOutlineBowlingIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
