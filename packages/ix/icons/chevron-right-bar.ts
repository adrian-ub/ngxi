import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightBarIcon],svg[ix-chevron-right-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M158.17 431.023L128 400.853l144.898-144.915L128 111.023l30.17-30.17l175.085 175.085zm183.163-4.356H384V85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronRightBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
