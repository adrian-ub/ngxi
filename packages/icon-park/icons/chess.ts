import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChessIcon],svg[icon-park-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M34 4H14V14H34V4Z"></svg:path><svg:path d="M27 14L33 37H15L21 14"></svg:path><svg:path d="M40 44H8V40L14 37H34L40 40V44Z"></svg:path><svg:path d="M12 23.02H36"></svg:path><svg:path d="M20.5 4V8"></svg:path><svg:path d="M27.5 4V8"></svg:path></svg:g>`,
})
export class IconParkChessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
