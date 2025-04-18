import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationDownIcon],svg[mdi-format-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 19.73l-3-3h2V4.27h2v12.46h2zm8-10.35v3.75l5.03-1.88zM21 12l-11 4.73v-2.06l2.19-.94V8.77L10 7.83V5.77l11 4.73z"></svg:path>`,
})
export class MdiFormatTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
