import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePyramidShapeSolidIcon],svg[streamline-pyramid-shape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.36.525a1 1 0 0 0-.207.226L.353 9.43a1 1 0 0 0 .42 1.466l5.586 2.528V.524Zm1.25 12.9l5.585-2.526a1 1 0 0 0 .42-1.466L7.816.75A1 1 0 0 0 7.61.524z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePyramidShapeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
