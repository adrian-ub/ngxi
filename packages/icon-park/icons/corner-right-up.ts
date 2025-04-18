import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerRightUpIcon],svg[icon-park-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 16L28 8L36 16"></svg:path><svg:path d="M12 40H25C26.6569 40 28 38.6569 28 37V8"></svg:path></svg:g>`,
})
export class IconParkCornerRightUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
