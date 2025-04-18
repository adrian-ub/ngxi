import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeltDuotoneIcon],svg[ph-belt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 88h96v80H8Zm176 0v80h64V88Z" opacity=".2"></svg:path><svg:path d="M248 160h-56V96h56a8 8 0 0 0 0-16h-58.16A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.84 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.16a16 16 0 0 0 13.84 8h64a16 16 0 0 0 13.84-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z"></svg:path></svg:g>`,
})
export class PhBeltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
