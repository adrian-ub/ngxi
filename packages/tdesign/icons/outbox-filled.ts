import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOutboxFilledIcon],svg[tdesign-outbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 14.5V4h16v10.5h-4.965l-.253.625a3.001 3.001 0 0 1-5.564 0l-.253-.625zm8-9.414L7.586 9.5L9 10.914l2-2V14h2V8.914l2 2L16.414 9.5z"></svg:path>`,
})
export class TdesignOutboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
