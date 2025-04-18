import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBroadcastRadioIcon],svg[icon-park-broadcast-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M31 31C33.7614 31 36 28.7614 36 26C36 23.2386 33.7614 21 31 21C28.2386 21 26 23.2386 26 26C26 28.7614 28.2386 31 31 31Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 22H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 30H18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M40 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 12L36 4"></svg:path></svg:g>`,
})
export class IconParkBroadcastRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
