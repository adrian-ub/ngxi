import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerIcon],svg[icon-park-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20.7301 27.1255C22.7185 25.833 25.2815 25.833 27.2699 27.1255L42.8202 37.2331C43.556 37.7114 44 38.5295 44 39.4071C44 40.8391 42.8391 42 41.4071 42H6.59288C5.16087 42 4 40.8391 4 39.4071C4 38.5295 4.44395 37.7114 5.17979 37.2331L20.7301 27.1255Z" clip-rule="evenodd"></svg:path><svg:path d="M24 25C24 25 30 16.3137 30 13C30 9.68629 27.3137 7 24 7C20.6863 7 18 9.68629 18 13"></svg:path></svg:g>`,
})
export class IconParkHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
