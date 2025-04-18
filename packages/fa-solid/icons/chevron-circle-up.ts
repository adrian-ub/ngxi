import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronCircleUpIcon],svg[fa-solid-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248s-111 248-248 248S8 393 8 256m231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0"></svg:path>`,
})
export class FaSolidChevronCircleUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
