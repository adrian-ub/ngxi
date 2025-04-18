import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCircleLeftIcon],svg[fa6-solid-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256a256 256 0 1 0-512 0a256 256 0 1 0 512 0m-395.3-11.3l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v64h96c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-96v64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6"></svg:path>`,
})
export class Fa6SolidCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
