import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleThinIcon],svg[ph-align-top-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m-32 40v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignTopSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
