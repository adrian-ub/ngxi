import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPinEndIcon],svg[ic-round-pin-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-4.34-.34a.996.996 0 0 0 0-1.41l-2.12-2.12l1.27-1.27c.31-.32.09-.86-.36-.86H9.5c-.28 0-.5.22-.5.5v3.95c0 .45.54.67.85.35l1.27-1.27l2.12 2.12c.39.4 1.03.4 1.42.01"></svg:path>`,
})
export class IcRoundPinEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
