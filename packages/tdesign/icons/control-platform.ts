import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignControlPlatformIcon],svg[tdesign-control-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .856l10 5.556v11.176l-10 5.556l-10-5.556V6.412zm-8 8.04v7.515l7 3.89v-7.699zM13 20.3l7-3.889V8.897l-7 3.706zm-1-9.432L19.12 7.1L12 3.144L4.88 7.099z"></svg:path>`,
})
export class TdesignControlPlatformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
