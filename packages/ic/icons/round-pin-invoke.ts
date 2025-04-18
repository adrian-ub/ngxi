import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPinInvokeIcon],svg[ic-round-pin-invoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3M9.34 15.66c.39.39 1.02.39 1.41 0l2.12-2.12l1.27 1.27c.32.31.86.09.86-.36V10.5c0-.28-.22-.5-.5-.5h-3.95c-.45 0-.67.54-.35.85l1.27 1.27l-2.12 2.12c-.4.39-.4 1.03-.01 1.42"></svg:path>`,
})
export class IcRoundPinInvokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
