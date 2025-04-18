import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRelativityIcon],svg[tdesign-relativity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h13v7h7v13H9v-7H2zm9 13v5h9v-9h-5v4zm2-6V4H4v9h5V9zm0 2h-2v2h2z"></svg:path>`,
})
export class TdesignRelativityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
