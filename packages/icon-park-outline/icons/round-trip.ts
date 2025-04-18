import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRoundTripIcon],svg[icon-park-outline-round-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m9 24l-4-4s-1.4 4.728-1.076 7.578S7.274 32.574 10 31c2.727-1.574 34-21 34-21l-9-2z"></svg:path><svg:path d="m26 13l-15.202-1.615L8 13l7 7m14 24l-4-5h17v-4m-10-7l4 5H19v4"></svg:path></svg:g>`,
})
export class IconParkOutlineRoundTripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
