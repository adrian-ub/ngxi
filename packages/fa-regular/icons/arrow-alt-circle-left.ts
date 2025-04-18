import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularArrowAltCircleLeftIcon],svg[fa-regular-arrow-alt-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8S8 119 8 256m448 0c0 110.5-89.5 200-200 200S56 366.5 56 256S145.5 56 256 56s200 89.5 200 200m-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12"></svg:path>`,
})
export class FaRegularArrowAltCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
