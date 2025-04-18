import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiReferenceExistingLtrIcon],svg[ooui-reference-existing-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0a2 2 0 0 0-2 2h9a2 2 0 0 1 2 2v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></svg:path><svg:path fill="currentColor" d="m13 12l-2.8-2.8L7.4 12V3H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></svg:path>`,
})
export class OouiReferenceExistingLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
