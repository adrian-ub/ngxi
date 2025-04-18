import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendLeftDown2Icon],svg[streamline-arrow-bend-left-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 10.5l3 3l3-3"></svg:path><svg:path d="M11.5.5h-2a4 4 0 0 0-4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendLeftDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
