import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayListRemoveIcon],svg[gg-play-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.964 4.634h-12v2h12zm0 4h-12v2h12zm-12 4h8v2h-8zm9.001 1.076l1.414-1.415l2.121 2.121l2.121-2.12l1.415 1.413l-2.122 2.122l2.122 2.12l-1.415 1.415l-2.121-2.121l-2.121 2.121l-1.415-1.414l2.122-2.122z"></svg:path>`,
})
export class GgPlayListRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
