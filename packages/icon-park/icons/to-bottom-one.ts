import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkToBottomOneIcon],svg[icon-park-to-bottom-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 14L24 26L12 14"></svg:path><svg:path d="M12 34H36"></svg:path></svg:g>`,
})
export class IconParkToBottomOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
