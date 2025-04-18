import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNestedArrowsIcon],svg[icon-park-twotone-nested-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNestedArrows0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 17V4H4v26h13"></svg:path><svg:path fill="#555" d="M43 43V17H17v26z"></svg:path><svg:path d="M33 30H17m16 0l-5-5zm0 0l-5 5zM17 17v26"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNestedArrows0)"></svg:path>`,
})
export class IconParkTwotoneNestedArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
