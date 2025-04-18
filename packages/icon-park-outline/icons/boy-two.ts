import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBoyTwoIcon],svg[icon-park-outline-boy-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6"></svg:circle><svg:path d="M31 44v-9l5-3l-4-13s-4-3-8-3s-8 3-8 3l-4 12l5 4v9"></svg:path></svg:g>`,
})
export class IconParkOutlineBoyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
