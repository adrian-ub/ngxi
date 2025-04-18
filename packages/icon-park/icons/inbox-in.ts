import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxInIcon],svg[icon-park-inbox-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 30L10 6H38L43 30"></svg:path><svg:path fill="#2F88FF" d="M5 30H14.9091L16.7273 36H31.2727L33.0909 30H43V43H5V30Z"></svg:path><svg:path stroke-linecap="round" d="M18 20L24 26L30 20"></svg:path><svg:path stroke-linecap="round" d="M24 26V14"></svg:path></svg:g>`,
})
export class IconParkInboxInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
