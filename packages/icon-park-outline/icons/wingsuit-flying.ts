import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWingsuitFlyingIcon],svg[icon-park-outline-wingsuit-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 20c-8.71 0-16 7.28-16 16h7v8h18v-8h7c.01-8.71-7.29-16-16-16m-9 16V23m18 13V23m-9 21V20"></svg:path></svg:g>`,
})
export class IconParkOutlineWingsuitFlyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
