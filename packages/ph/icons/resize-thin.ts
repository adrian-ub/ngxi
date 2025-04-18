import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phResizeThinIcon],svg[ph-resize-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 116H48a4 4 0 0 0-4 4v88a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-88a4 4 0 0 0-4-4m-4 88H52v-80h80Zm80-20v16a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h24a4 4 0 0 0 4-4v-16a4 4 0 0 1 8 0m0-72v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0m0-56v16a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4h-16a4 4 0 0 1 0-8h16a12 12 0 0 1 12 12m-64-8a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M44 80V56a12 12 0 0 1 12-12h16a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v24a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhResizeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
