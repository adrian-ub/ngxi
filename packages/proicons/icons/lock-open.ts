import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLockOpenIcon],svg[proicons-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14.478" height="12.87" x="4.761" y="8.38" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.783 8.38V5.967a3.217 3.217 0 0 1 6.132-1.363"></svg:path><svg:circle cx="12" cy="14.815" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
