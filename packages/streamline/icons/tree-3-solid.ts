import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTree3SolidIcon],svg[streamline-tree-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.96.02a4 4 0 0 0-3.872 2.996a3.5 3.5 0 0 0 .41 6.976H5.92v2.988a1 1 0 1 0 2 0V9.992h2.582a3.5 3.5 0 0 0 .328-6.984A4 4 0 0 0 6.96.02" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTree3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
