import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSignalIcon],svg[fa-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1312v192q0 14-9 23t-23 9H32q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23m384-128v320q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h192q14 0 23 9t9 23m384-256v576q0 14-9 23t-23 9H800q-14 0-23-9t-9-23V928q0-14 9-23t23-9h192q14 0 23 9t9 23m384-384v960q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23V544q0-14 9-23t23-9h192q14 0 23 9t9 23m384-512v1472q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23V32q0-14 9-23t23-9h192q14 0 23 9t9 23"></svg:path>`,
})
export class FaSignalIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
