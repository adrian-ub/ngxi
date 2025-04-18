import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextureTwoIcon],svg[icon-park-texture-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"></svg:path><svg:path stroke="#fff" d="M12 12V20"></svg:path><svg:path stroke="#fff" d="M28 28V36"></svg:path><svg:path stroke="#fff" d="M20 12V20"></svg:path><svg:path stroke="#fff" d="M28 12H36"></svg:path><svg:path stroke="#fff" d="M12 28H20"></svg:path><svg:path stroke="#fff" d="M28 20H36"></svg:path><svg:path stroke="#fff" d="M12 36H20"></svg:path><svg:path stroke="#fff" d="M36 28V36"></svg:path></svg:g>`,
})
export class IconParkTextureTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
