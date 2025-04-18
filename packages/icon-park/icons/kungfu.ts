import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKungfuIcon],svg[icon-park-kungfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M11 17C13.7614 17 16 14.7614 16 12C16 9.23858 13.7614 7 11 7C8.23858 7 6 9.23858 6 12C6 14.7614 8.23858 17 11 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 18L28 24L25 42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 24L44 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 16.8L27 8L20 18L16 27L10 30"></svg:path></svg:g>`,
})
export class IconParkKungfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
