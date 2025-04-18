import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleDownIcon],svg[fa-solid-arrow-alt-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248M212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12"></svg:path>`,
})
export class FaSolidArrowAltCircleDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
