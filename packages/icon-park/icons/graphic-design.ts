import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicDesignIcon],svg[icon-park-graphic-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 32C11.268 32 5 25.732 5 18C5 10.268 11.268 4 19 4C26.732 4 33 10.268 33 18"></svg:path><svg:path fill="#2F88FF" d="M44 18H18V44H44V18Z"></svg:path></svg:g>`,
})
export class IconParkGraphicDesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
