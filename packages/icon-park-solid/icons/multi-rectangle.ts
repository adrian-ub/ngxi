import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMultiRectangleIcon],svg[icon-park-solid-multi-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 39h32V7H12v8"></svg:path><svg:path d="M8 39h24V15H8v8"></svg:path><svg:path fill="currentColor" d="M20 23H4v16h16z"></svg:path></svg:g>`,
})
export class IconParkSolidMultiRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
