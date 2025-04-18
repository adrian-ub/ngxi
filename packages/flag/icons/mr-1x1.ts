import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMr1x1Icon],svg[flag-mr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cd2a3e" d="M0 0h512v512H0z"></svg:path><svg:path fill="#006233" d="M0 76.8h512v358.4H0z"></svg:path><svg:path fill="#ffc400" d="M416 164.9a160 160 0 0 1-320 0a165 165 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z" class="mr-st1"></svg:path><svg:path fill="#ffc400" d="m256 100l-14.4 44.3h-46.5l37.6 27.3l-14.3 44.2l37.6-27.3l37.6 27.3l-14.4-44.2l37.7-27.3h-46.5z"></svg:path>`,
})
export class FlagMr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
