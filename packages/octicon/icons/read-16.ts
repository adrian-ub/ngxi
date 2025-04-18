import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRead16Icon],svg[octicon-read-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.115.65a1.75 1.75 0 0 1 1.77 0l6.25 3.663c.536.314.865.889.865 1.51v6.427A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25V5.823c0-.621.33-1.196.865-1.51Zm1.011 1.293a.25.25 0 0 0-.252 0l-5.72 3.353L6.468 7.76a2.75 2.75 0 0 1 3.066 0l4.312-2.464zM13.15 12.5L8.772 9.06a1.25 1.25 0 0 0-1.544 0L2.85 12.5Zm1.35-5.85l-3.687 2.106l3.687 2.897ZM5.187 8.756L1.5 6.65v5.003Z"></svg:path>`,
})
export class OcticonRead16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
