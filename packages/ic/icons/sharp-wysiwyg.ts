import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWysiwygIcon],svg[ic-sharp-wysiwyg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12H7v-2h10zm-4 2H7v2h6zm8 7H3V3h18zM19 7H5v12h14z"></svg:path>`,
})
export class IcSharpWysiwygIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
