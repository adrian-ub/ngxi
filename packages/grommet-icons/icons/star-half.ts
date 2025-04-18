import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStarHalfIcon],svg[grommet-icons-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path fill-opacity=".2" d="M12 16.667V2l2.5 7.5H22L16 14l3 8z"></svg:path><svg:path d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2z"></svg:path></svg:g>`,
})
export class GrommetIconsStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
