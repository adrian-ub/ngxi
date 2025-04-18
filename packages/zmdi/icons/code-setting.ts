import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeSettingIcon],svg[zmdi-code-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 80L55 192l93 112l-33 27L0 192L115 53zm-16 133v-42h43v42zm213-42v42h-42v-42zm-128 42v-42h43v42zM362 53l115 139l-115 139l-33-27l93-112l-93-112z"></svg:path>`,
})
export class ZmdiCodeSettingIcon {
  readonly viewBox = input("0 0 480 384")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
