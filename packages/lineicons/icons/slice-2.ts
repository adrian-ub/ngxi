import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlice2Icon],svg[lineicons-slice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.802 4.221a2.166 2.166 0 0 0-3.062 0L2.24 19.72l.001.001A.75.75 0 0 0 2.773 21h8.125a2.25 2.25 0 0 0 2.25-2.25v-3.812l7.654-7.654a2.166 2.166 0 0 0 0-3.063m-7.654 8.596v-1.883L18.8 5.282a.665.665 0 1 1 .941.941zM4.584 19.5l7.064-7.064v6.314a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class LineiconsSlice2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
