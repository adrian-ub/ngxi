import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScorpioIcon],svg[icon-park-outline-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12a6 6 0 0 0-12 0m24 0a6 6 0 0 0-12 0m24 22a6 6 0 0 1-12 0M4 12v18m12-18v18"></svg:path><svg:path d="M28 12v22m12-11v11"></svg:path><svg:path stroke-linejoin="round" d="m36 27l4-4l4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineScorpioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
