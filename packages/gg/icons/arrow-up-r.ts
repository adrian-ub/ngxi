import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowUpRIcon],svg[gg-arrow-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.854 11.974l1.415-1.414l-4.243-4.243l-4.243 4.243l1.414 1.414l1.829-1.828v7.537h2v-7.537z"></svg:path><svg:path fill-rule="evenodd" d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
