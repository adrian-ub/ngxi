import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChevronsRightIcon],svg[bx-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.296 7.71L14.621 12l-4.325 4.29l1.408 1.42L17.461 12l-5.757-5.71z"></svg:path><svg:path fill="currentColor" d="M6.704 6.29L5.296 7.71L9.621 12l-4.325 4.29l1.408 1.42L12.461 12z"></svg:path>`,
})
export class BxChevronsRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
