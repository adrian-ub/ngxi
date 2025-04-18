import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVialIcon],svg[icon-park-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M30 33C30 26.5556 30 16.8889 30 4H18C18 16.8749 18 26.531 18 32.9684"></svg:path><svg:path stroke-linecap="round" d="M30 14H25"></svg:path><svg:path stroke-linecap="round" d="M30 20H25"></svg:path><svg:path fill="#2F88FF" d="M18 33C18 34.0441 18 35.6103 18 37.6985C18 41.1787 20.6863 44 24 44C27.3137 44 30 41.1787 30 37.6985C30 35.6386 30 34.0937 30 33.0638L18 33Z"></svg:path></svg:g>`,
})
export class IconParkVialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
