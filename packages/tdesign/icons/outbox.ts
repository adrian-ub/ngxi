import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOutboxIcon],svg[tdesign-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-2 14.5V20H4v-3.5h3.67A5 5 0 0 0 12 19a5 5 0 0 0 4.33-2.5zm-16-2V4h16v10.5h-4.965l-.253.625a3.001 3.001 0 0 1-5.564 0l-.253-.625zm8-9.414L7.586 9.5L9 10.914l2-2V14h2V8.914l2 2L16.414 9.5z"></svg:path>`,
})
export class TdesignOutboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
