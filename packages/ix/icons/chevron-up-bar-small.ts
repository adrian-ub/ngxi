import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpBarSmallIcon],svg[ix-chevron-up-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 192h256v-42.667H128zm128.001 62.081l91.52 91.733l30.293-30.293l-121.813-121.6l-121.813 121.6l30.293 30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronUpBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
