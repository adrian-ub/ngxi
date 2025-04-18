import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVersusIcon],svg[hugeicons-versus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.252 12.748a.76.76 0 0 1-.67-.41l-4-8a.745.745 0 0 1 .34-1.01c.37-.18.82-.03 1.01.34l3.33 6.66l3.33-6.66c.19-.37.64-.52 1.01-.34c.37.19.52.64.34 1.01l-4 8a.76.76 0 0 1-.67.41zm-1 8h-.005a.74.74 0 0 0 .635-.35l10-16a.747.747 0 1 0-1.27-.79l-10 16c-.22.35-.11.81.24 1.03q.19.107.395.11h-.005zm9 0h3c.96 0 1.75-.79 1.75-1.75v-2c0-.96-.79-1.75-1.75-1.75h-3c-.14 0-.25-.11-.25-.25v-2c0-.14.11-.25.25-.25h3c.14 0 .25.11.25.25v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-.96-.79-1.75-1.75-1.75h-3c-.96 0-1.75.79-1.75 1.75v2c0 .96.79 1.75 1.75 1.75h3c.14 0 .25.11.25.25v2c0 .14-.11.25-.25.25h-3c-.14 0-.25-.11-.25-.25v-.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.5c0 .96.79 1.75 1.75 1.75" color="currentColor"></svg:path>`,
})
export class HugeiconsVersusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
