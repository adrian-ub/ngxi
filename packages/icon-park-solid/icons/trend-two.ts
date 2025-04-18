import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrendTwoIcon],svg[icon-park-solid-trend-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path fill="currentColor" d="m4 26l8 2v10H4zm16-2l8-4v18h-8zm16-8l8-4v26h-8z"></svg:path><svg:path stroke-linecap="round" d="m4 18l8 2L44 4H34"></svg:path></svg:g>`,
})
export class IconParkSolidTrendTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
