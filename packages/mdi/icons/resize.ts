import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiResizeIcon],svg[mdi-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.59 12l4-4H11V6h7v7h-2V9.41l-4 4V16h8V4H8v8zM22 2v16H12v4H2V12h4V2zM10 14H4v6h6z"></svg:path>`,
})
export class MdiResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
