import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQueueIcon],svg[tdesign-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 2.001l.003 18.418L20 18.415V4.001l-12.999.001v-2zm-20 4h16v16H2zm2 2v12h12V8zm7 1.5V13h3.5v2H11v3.5H9V15H5.5v-2H9V9.5z"></svg:path>`,
})
export class TdesignQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
