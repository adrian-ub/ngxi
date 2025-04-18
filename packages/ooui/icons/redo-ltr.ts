import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiRedoLtrIcon],svg[ooui-redo-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.5L12 3v11zM12 7v3h-1c-4 0-7 2-7 6v1H1v-1c0-6 5-9 10-9z"></svg:path>`,
})
export class OouiRedoLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
