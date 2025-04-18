import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFactoryBuildingIcon],svg[icon-park-factory-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 44V4H12V20L28 12V20L44 12V44H4Z"></svg:path><svg:rect width="8" height="8" x="12" y="28" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="28" y="28" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkFactoryBuildingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
