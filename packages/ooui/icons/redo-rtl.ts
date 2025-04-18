import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiRedoRtlIcon],svg[ooui-redo-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8.5L8 3v11zM8 7v3h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9z"></svg:path>`,
})
export class OouiRedoRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
