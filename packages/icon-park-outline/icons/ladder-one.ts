import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLadderOneIcon],svg[icon-park-outline-ladder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 17h18m-20 9h18m-21 9h18m-1.435 8l9.74-35.47A2 2 0 0 0 36.377 5H22.214a2 2 0 0 0-1.91 1.41L9 43m8-25l4 24m14-24l4 24"></svg:path>`,
})
export class IconParkOutlineLadderOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
