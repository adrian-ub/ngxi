import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJobRunIcon],svg[carbon-job-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2m0-13h8v11h-8zM8 19h6v2H8c-1.1 0-2-.9-2-2V8h2zm-4 4h6v2H4c-1.1 0-2-.9-2-2V12h2zm26 1l-6 6l-1.4-1.4l3.6-3.6H17v-2h9.2l-3.6-3.6L24 18z"></svg:path>`,
})
export class CarbonJobRunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
