import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShareTwoIcon],svg[icon-park-share-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 4L44 22L26 39V28C12 28 6 43 6 43C6 26 11 15 26 15V4Z"></svg:path>`,
})
export class IconParkShareTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
