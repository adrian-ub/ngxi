import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeltIcon],svg[ph-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160h-56V96h56a8 8 0 0 0 0-16h-58.17A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.83 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.17a16 16 0 0 0 13.83 8h64a16 16 0 0 0 13.83-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z"></svg:path>`,
})
export class PhBeltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
