import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQueueFilledIcon],svg[tdesign-queue-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.003 20.419L22 2L7 2.002l.001 2H20v14.413z"></svg:path><svg:path fill="currentColor" d="M18 6H2v16h16zm-3.5 9H11v3.5H9V15H5.5v-2H9V9.5h2V13h3.5z"></svg:path>`,
})
export class TdesignQueueFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
