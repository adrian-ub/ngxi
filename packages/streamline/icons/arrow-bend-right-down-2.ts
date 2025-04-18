import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendRightDown2Icon],svg[streamline-arrow-bend-right-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 10.5l-3 3l-3-3"></svg:path><svg:path d="M2.5.5h2a4 4 0 0 1 4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendRightDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
