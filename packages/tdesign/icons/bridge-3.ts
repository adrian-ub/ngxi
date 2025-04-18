import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge3Icon],svg[tdesign-bridge-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v3.465l7 4.667V2h2v8.132l7-4.667V2h2v13h1v2h-1v5h-2v-5H4v5H2v-5H1v-2h1V2zm0 13h7v-2.465L4 7.87zm9 0h7V7.87l-7 4.666z"></svg:path>`,
})
export class TdesignBridge3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
