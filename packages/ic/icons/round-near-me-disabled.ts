import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNearMeDisabledIcon],svg[ic-round-near-me-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.34l6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36l-4.2 1.56c-.41.16-.68.54-.68.97c0 .42.26.8.65.96l6.42 2.57l2.57 6.42c.16.39.54.65.96.65c.43 0 .82-.27.97-.67l1.56-4.2l4.36 4.36c.39.39 1.02.39 1.41 0c.39-.4.39-1.03 0-1.42"></svg:path>`,
})
export class IcRoundNearMeDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
