import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignHorizontalCentersIcon],svg[radix-icons-align-horizontal-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 2C2.56 2 2 2.56 2 3.25v8.5c0 .69.56 1.25 1.25 1.25h2.5C6.44 13 7 12.44 7 11.75v-8.5C7 2.56 6.44 2 5.75 2h-2.5zM3 3.25A.25.25 0 0 1 3.25 3h2.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25v-8.5zM9.25 4C8.56 4 8 4.56 8 5.25v4.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-4.5C13 4.56 12.44 4 11.75 4h-2.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class RadixIconsAlignHorizontalCentersIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
