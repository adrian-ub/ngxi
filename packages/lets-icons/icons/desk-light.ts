import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskLightIcon],svg[lets-icons-desk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="16" height="16" x="4" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M16 2v4c0 .943 0 1.414-.293 1.707S14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293S8 6.943 8 6V2m1 12h6"></svg:path></svg:g>`,
})
export class LetsIconsDeskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
