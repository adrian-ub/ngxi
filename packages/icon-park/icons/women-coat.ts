import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWomenCoatIcon],svg[icon-park-women-coat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 10C16 9 19 4 19 4H29C29 4 32 9.2 36 10L42 31H34V44H14V31H6L12 10Z"></svg:path><svg:path d="M19 4L24 18L29 4"></svg:path><svg:path d="M24 18L24 44"></svg:path></svg:g>`,
})
export class IconParkWomenCoatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
