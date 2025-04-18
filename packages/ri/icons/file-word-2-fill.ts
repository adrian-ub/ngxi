import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileWord2FillIcon],svg[ri-file-word-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2l2 2h2V8z"></svg:path>`,
})
export class RiFileWord2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
