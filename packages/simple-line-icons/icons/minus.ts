import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsMinusIcon],svg[simple-line-icons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0m0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449m-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32z"></svg:path>`,
})
export class SimpleLineIconsMinusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
