import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowLeftIcon],svg[icon-park-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.79889 24H41.7989"></svg:path><svg:path d="M17.7988 36L5.79883 24L17.7988 12"></svg:path></svg:g>`,
})
export class IconParkArrowLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
