import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskVisibleIcon],svg[tdesign-task-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7v2H3v20h7v-2H5V5h2v2h10V5h2v8h2V3h-4zm-2 4H9V3h6zm.75 15v-2h2.5v2z"></svg:path><svg:path fill="currentColor" d="M17.002 23.5c4.419 0 6.09-4.5 6.09-4.5s-1.673-4.5-6.09-4.5s-6.09 4.5-6.09 4.5s1.672 4.5 6.09 4.5m-.002-2c-2.615 0-3.87-2.5-3.87-2.5s1.25-2.5 3.87-2.5s3.87 2.5 3.87 2.5s-1.254 2.5-3.87 2.5"></svg:path>`,
})
export class TdesignTaskVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
