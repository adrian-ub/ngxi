import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCircleArrowLeftIcon],svg[fa6-solid-circle-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256a256 256 0 1 0-512 0a256 256 0 1 0 512 0M215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71l214.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H177.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9z"></svg:path>`,
})
export class Fa6SolidCircleArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
