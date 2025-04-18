import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilePdfIcon],svg[tdesign-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V11h-2V9h-6V3H5v18h16v2H3zm12 2.414V7h3.586zM6 12h3.714c.71 0 1.286.576 1.286 1.286v2.428c0 .71-.576 1.286-1.286 1.286H8v3H6zm2 3h1v-1H8zm3.5-3h3.714c.71 0 1.286.576 1.286 1.286v5.428c0 .71-.576 1.286-1.286 1.286H11.5zm2 2v4h1v-4zm3.5-.714c0-.71.576-1.286 1.286-1.286h3.38v2H19v1h2.667v2H19v3h-2z"></svg:path>`,
})
export class TdesignFilePdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
