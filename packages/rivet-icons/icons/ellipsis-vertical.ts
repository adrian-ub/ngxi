import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsEllipsisVerticalIcon],svg[rivet-icons-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RivetIconsEllipsisVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
