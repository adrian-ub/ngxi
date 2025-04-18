import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTemplateAddLtrIcon],svg[ooui-template-add-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5V1h-2v4h-4v2h4v4h2V7h4V5z"></svg:path><svg:path fill="currentColor" d="M0 17V5h8v2H2v8h12v-2h2v4z"></svg:path>`,
})
export class OouiTemplateAddLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
