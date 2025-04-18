import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpSmallIcon],svg[ix-chevron-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M347.52 324.48L256 232.747l-91.52 91.733l-30.293-30.293L256 172.587l121.814 121.6z"></svg:path>`,
})
export class IxChevronUpSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
