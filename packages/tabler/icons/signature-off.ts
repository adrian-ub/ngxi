import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignatureOffIcon],svg[tabler-signature-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17q5-5 5-8c0-.394-.017-.735-.05-1.033M6 6C5 6 3.968 7.085 4 9c.034 2.048 1.658 4.877 2.5 6C8 17 9 17.5 10 16l2-3q.5 4 3 4c.219 0 .708-.341 1.231-.742M20 16c.303.245.64.677 1 1M3 3l18 18"></svg:path>`,
})
export class TablerSignatureOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
