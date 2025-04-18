import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFillIcon],svg[mdi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 11.5s-2 2.167-2 3.5a2 2 0 0 0 4 0c0-1.333-2-3.5-2-3.5zm-4.281-1.52L5.207 10L10 5.208l4.719 4.771zm1.842-1.041L7.621 0L6.207 1.414l2.379 2.379l-5.147 5.146a1.502 1.502 0 0 0 0 2.122l5.5 5.5c.293.293.677.439 1.061.439c.384 0 .768-.146 1.061-.439l5.5-5.5a1.502 1.502 0 0 0 0-2.122z" fill="currentColor"></svg:path><svg:path d="M0 20h24v4H0z" fill="currentColor"></svg:path>`,
})
export class MdiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
