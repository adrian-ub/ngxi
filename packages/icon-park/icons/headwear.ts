import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadwearIcon],svg[icon-park-headwear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12.4167 43C10.095 40.0682 8 35.7788 8 31C8 22.1634 15.1634 15 24 15C32.8366 15 40 22.1634 40 31C40 35.7788 37.905 40.0682 35.5833 43"></svg:path><svg:path fill="#2F88FF" d="M34 13.5L43 5L40 17L35 18L34 13.5Z"></svg:path><svg:path fill="#2F88FF" d="M14 13.5L5 5L8 17L13 18L14 13.5Z"></svg:path></svg:g>`,
})
export class IconParkHeadwearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
