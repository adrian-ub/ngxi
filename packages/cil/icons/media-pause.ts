import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMediaPauseIcon],svg[cil-media-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 48H72a24.03 24.03 0 0 0-24 24v368a24.03 24.03 0 0 0 24 24h128a24.03 24.03 0 0 0 24-24V72a24.03 24.03 0 0 0-24-24m-8 384H80V80h112ZM440 48H312a24.03 24.03 0 0 0-24 24v368a24.03 24.03 0 0 0 24 24h128a24.03 24.03 0 0 0 24-24V72a24.03 24.03 0 0 0-24-24m-8 384H320V80h112Z"></svg:path>`,
})
export class CilMediaPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
