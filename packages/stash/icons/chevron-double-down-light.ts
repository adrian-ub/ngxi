import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownLightIcon],svg[stash-chevron-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.354 6.94a.5.5 0 0 1 0 .706L12 12L7.646 7.646a.5.5 0 1 1 .708-.707L12 10.586l3.646-3.647a.5.5 0 0 1 .708 0"></svg:path><svg:path d="M16.354 12.146a.5.5 0 0 1 0 .708L12 17.207l-4.354-4.353a.5.5 0 0 1 .708-.708L12 15.793l3.646-3.647a.5.5 0 0 1 .708 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
