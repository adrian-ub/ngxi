import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownBarSmallIcon],svg[ix-chevron-down-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m134.188 196.48l121.813 121.6l121.813-121.6l-30.293-30.293l-91.52 91.733l-91.52-91.733zM128 362.667h256V320H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronDownBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
