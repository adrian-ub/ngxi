import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFindIcon],svg[icon-park-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M4 7H44"></svg:path><svg:path stroke-linecap="round" d="M4 23H15"></svg:path><svg:path stroke-linecap="round" d="M4 39H15"></svg:path><svg:path fill="#2F88FF" d="M31.5 34C36.1944 34 40 30.1944 40 25.5C40 20.8056 36.1944 17 31.5 17C26.8056 17 23 20.8056 23 25.5C23 30.1944 26.8056 34 31.5 34Z"></svg:path><svg:path stroke-linecap="round" d="M37 32L44 39.0505"></svg:path></svg:g>`,
})
export class IconParkFindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
