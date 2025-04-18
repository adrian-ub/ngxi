import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiExpandMiniIcon],svg[oui-expand-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.707 10L10 6.707A.5.5 0 0 0 9.293 6L6 9.293a.5.5 0 1 0 .707.707M4 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 1 1 0 1h-1A1.5 1.5 0 0 1 4 10.5zm8-3a.5.5 0 1 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1A1.5 1.5 0 0 1 12 5.5z"></svg:path>`,
})
export class OuiExpandMiniIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
