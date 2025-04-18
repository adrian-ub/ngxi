import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSelectOIcon],svg[gg-select-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.172 11.508l-1.415-1.414L12 5.85l4.243 4.243l-1.415 1.414L12 8.68zm0 .984l-1.415 1.414L12 18.15l4.243-4.243l-1.415-1.414L12 15.32z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSelectOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
