import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsCopyIcon],svg[mono-icons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2zm8 12v4h10V10h-4v4a2 2 0 0 1-2 2zm4-2V4H4v10z"></svg:path>`,
})
export class MonoIconsCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
