import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleLeftIcon],svg[fa-solid-arrow-alt-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248m116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12"></svg:path>`,
})
export class FaSolidArrowAltCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
