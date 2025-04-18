import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUndoRtlIcon],svg[ooui-undo-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4h-1C6 7 1 10 1 16v1h3v-1c0-4 3-6 7-6h1v4l7-5.5z"></svg:path>`,
})
export class OouiUndoRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
