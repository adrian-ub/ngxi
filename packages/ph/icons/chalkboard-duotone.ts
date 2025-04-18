import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardDuotoneIcon],svg[ph-chalkboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v88h-72v32H64V80Z" opacity=".2"></svg:path><svg:path d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z"></svg:path></svg:g>`,
})
export class PhChalkboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
