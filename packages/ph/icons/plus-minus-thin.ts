import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusThinIcon],svg[ph-plus-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 58.83l-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.66M68 112a4 4 0 0 0 8 0V76h36a4 4 0 0 0 0-8H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36Zm156 68h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhPlusMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
