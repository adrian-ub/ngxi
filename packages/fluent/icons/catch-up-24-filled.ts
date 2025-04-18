import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCatchUp24FilledIcon],svg[fluent-catch-up-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.372 7.269c-.666-1.701-3.076-1.692-3.73.013l-1.207 3.149a.5.5 0 0 1-.466.32H4.562a2 2 0 1 0 .292 2H5.97a2.5 2.5 0 0 0 2.334-1.605L9.51 7.998l3.22 8.227c.638 1.628 2.91 1.712 3.666.136l1.597-3.326a.5.5 0 0 1 .45-.283h.703a2 2 0 1 0 .292-2h-.994a2.5 2.5 0 0 0-2.254 1.418l-1.597 3.326z"></svg:path>`,
})
export class FluentCatchUp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
