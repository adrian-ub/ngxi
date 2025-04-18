import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidParagraphRectangleIcon],svg[icon-park-solid-paragraph-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9h18M24 19h18M6 29h36M6 39h36"></svg:path><svg:path fill="currentColor" d="M6 9h10v10H6z"></svg:path></svg:g>`,
})
export class IconParkSolidParagraphRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
