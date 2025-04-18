import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextDirectionRIcon],svg[ri-text-direction-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zM7 17h12v2H7v2.5L3 18l4-3.5z"></svg:path>`,
})
export class RiTextDirectionRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
