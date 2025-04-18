import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPinboardIcon],svg[ps-pinboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m280 260l90-95l-87 21L145 58V2L-1 150l66-3l118 145l-14 78l87-88l204 180z"></svg:path>`,
})
export class PsPinboardIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
