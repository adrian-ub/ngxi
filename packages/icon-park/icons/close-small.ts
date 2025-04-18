import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseSmallIcon],svg[icon-park-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 14L34 34"></svg:path><svg:path d="M14 34L34 14"></svg:path></svg:g>`,
})
export class IconParkCloseSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
