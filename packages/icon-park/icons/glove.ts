import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGloveIcon],svg[icon-park-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 42H35.8333V34C35.8333 34 41 20.5823 42 18C43 15.4177 41.5 12.6651 38 13C34.5 13.3349 31.1111 21.3291 31.1111 21.3291C31.1111 21.3291 30.5 13 30 10.5C29.5 8 29 4 19.3056 4C9.61111 4 8 11.1203 8 15V42Z"></svg:path>`,
})
export class IconParkGloveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
