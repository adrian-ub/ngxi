import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineStreamIcon],svg[ic-baseline-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10.05 8.59L6.03 4.55h-.01l-.31-.32l-1.42 1.41l4.02 4.05l.01-.01l.31.32zm3.893.027l4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41l-4.03 4.01l-.32.33l1.41 1.41l4.03-4.02zm9.75 2.94l-3.99-4.01l-.36-.35L14 15.35l3.99 4.01l.35.35z"></svg:path><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class IcBaselineStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
