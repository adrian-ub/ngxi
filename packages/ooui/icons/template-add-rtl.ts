import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTemplateAddRtlIcon],svg[ooui-template-add-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h4v4h2V7h4V5H6V1H4v4H0z"></svg:path><svg:path fill="currentColor" d="M4 13h2v2h12V7h-6V5h8v12H4z"></svg:path>`,
})
export class OouiTemplateAddRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
