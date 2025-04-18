import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeModernIcon],svg[mdi-home-modern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V8a2 2 0 0 1 2-2l8-3v3a2 2 0 0 1 2 2v13h-6v-5H8v5zm8-2h2v-3h-2zm-6-6h2V9H8zm4 0h4V9h-4z"></svg:path>`,
})
export class MdiHomeModernIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
