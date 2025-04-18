import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownSmallIcon],svg[ix-chevron-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 339.413l-121.813-121.6l30.293-30.293L256 279.253l91.52-91.733l30.294 30.293z"></svg:path>`,
})
export class IxChevronDownSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
