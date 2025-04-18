import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsImageMultipleIcon],svg[gridicons-image-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 15 7.5M4 20h14a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V8a2 2 0 0 1 2-2zM22 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 4v6.333L11 7l4.855 5.395l.656-.731a2 2 0 0 1 2.976 0l.513.57V4z"></svg:path>`,
})
export class GridiconsImageMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
