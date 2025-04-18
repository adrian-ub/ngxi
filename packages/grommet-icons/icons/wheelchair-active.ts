import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWheelchairActiveIcon],svg[grommet-icons-wheelchair-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 6l3-3l7 3v2l-3 3M9 22a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-5l5 3l-2 6m2-17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 6l4-4m-6 4l4-4"></svg:path>`,
})
export class GrommetIconsWheelchairActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
