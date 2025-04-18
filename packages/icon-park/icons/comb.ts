import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCombIcon],svg[icon-park-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.20117 31.0713L16.9291 43.7992L43.7992 16.9292L31.0712 4.20123"></svg:path><svg:path d="M9.15137 26.1221L16.2224 33.1931"></svg:path><svg:path d="M14.8076 20.4653L21.8787 27.5364"></svg:path><svg:path d="M20.4648 14.8081L27.5359 21.8792"></svg:path><svg:path d="M26.1211 9.15137L33.1922 16.2224"></svg:path><svg:path d="M12.6865 39.5566L39.5566 12.6866"></svg:path></svg:g>`,
})
export class IconParkCombIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
